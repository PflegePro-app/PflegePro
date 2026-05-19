#!/usr/bin/env python3
"""
PflegePro - Téléchargeur d'images Wikimedia Commons
Usage: python3 download_images.py
"""
import json
import subprocess
import sys
from pathlib import Path

# CONFIG
USER_AGENT = "PflegePro/1.0 (educational nursing app)"
TEMP_DIR = Path("temp_images")
FINAL_DIR = Path("public/images/material")
WEBP_QUALITY = 80

# LISTE DES IMAGES À TÉLÉCHARGER
# Format: (nom_fichier_local, nom_fichier_wikimedia)
IMAGES = [
    ("venenverweilkanuele", "Peripheral_venous_catheter-01ESD.jpg"),
    ("medikamentendispenser", "Pill_Dispenser_(daily).jpg"),
    ("ohrthermometer", "Ear_Thermometer.png"),
    ("kinderwaage", "Infant_scales_2023.jpg"),
    ("kinderkanuele", "Peripheral_venous_catheter-02ESD.jpg"),
]

def get_image_url(wikimedia_filename):
    """Récupère la vraie URL via l'API Wikimedia"""
    api_url = f"https://commons.wikimedia.org/w/api.php?action=query&titles=File:{wikimedia_filename}&prop=imageinfo&iiprop=url&format=json"
    result = subprocess.run(
        ["curl", "-s", "-L", "-A", USER_AGENT, api_url],
        capture_output=True, text=True
    )
    try:
        data = json.loads(result.stdout)
        pages = data["query"]["pages"]
        page = next(iter(pages.values()))
        if "imageinfo" in page:
            return page["imageinfo"][0]["url"]
        return None
    except (json.JSONDecodeError, KeyError):
        return None

def download_image(url, local_path):
    """Télécharge l'image"""
    result = subprocess.run(
        ["curl", "-s", "-L", "-A", USER_AGENT, url, "-o", str(local_path)],
        capture_output=True
    )
    return local_path.exists() and local_path.stat().st_size > 5000

def convert_to_webp(input_path, output_path):
    """Convertit en WebP"""
    result = subprocess.run(
        ["cwebp", "-q", str(WEBP_QUALITY), str(input_path), "-o", str(output_path)],
        capture_output=True
    )
    return output_path.exists()

def main():
    TEMP_DIR.mkdir(exist_ok=True)
    FINAL_DIR.mkdir(parents=True, exist_ok=True)
    
    success = []
    failed = []
    
    for local_name, wiki_name in IMAGES:
        print(f"\n📥 {local_name} ({wiki_name})")
        
        # 1. Get real URL
        url = get_image_url(wiki_name)
        if not url:
            print(f"   ❌ Pas de URL trouvée")
            failed.append(local_name)
            continue
        print(f"   🔗 {url[:80]}...")
        
        # 2. Download
        ext = url.split(".")[-1].lower()
        temp_path = TEMP_DIR / f"{local_name}.{ext}"
        if not download_image(url, temp_path):
            print(f"   ❌ Téléchargement échoué")
            failed.append(local_name)
            continue
        size_kb = temp_path.stat().st_size // 1024
        print(f"   ✅ Téléchargé ({size_kb} KB)")
        
        # 3. Convert to WebP
        webp_path = FINAL_DIR / f"{local_name}.webp"
        if not convert_to_webp(temp_path, webp_path):
            print(f"   ❌ Conversion WebP échouée")
            failed.append(local_name)
            continue
        webp_kb = webp_path.stat().st_size // 1024
        reduction = 100 - (webp_kb * 100 // size_kb) if size_kb > 0 else 0
        print(f"   ✅ WebP ({webp_kb} KB, -{reduction}%)")
        success.append(local_name)
    
    print(f"\n{'='*50}")
    print(f"✅ Succès : {len(success)}/{len(IMAGES)}")
    if failed:
        print(f"❌ Échecs : {', '.join(failed)}")
    print(f"📁 Images dans : {FINAL_DIR}")

if __name__ == "__main__":
    main()
