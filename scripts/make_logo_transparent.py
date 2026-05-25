from PIL import Image
import os

base = os.path.dirname(os.path.dirname(__file__))
assets = os.path.join(base, 'assets')
logo_path = os.path.join(assets, 'wingstone-logo.png')
backup_path = os.path.join(assets, 'wingstone-logo.png.bak')

if not os.path.exists(logo_path):
    print('Logo not found at', logo_path)
    raise SystemExit(1)

# Backup
if not os.path.exists(backup_path):
    os.replace(logo_path, backup_path)
    print('Backed up original to', backup_path)
    src = backup_path
else:
    src = backup_path

img = Image.open(src).convert('RGBA')
width, height = img.size
pixels = img.load()

# Sample corners to detect background color
samples = []
corner_coords = [(0,0), (width-1,0), (0,height-1), (width-1,height-1)]
for x,y in corner_coords:
    samples.append(pixels[x,y])

# Average color (RGB)
avg = [0,0,0]
for r,g,b,a in samples:
    avg[0] += r
    avg[1] += g
    avg[2] += b
avg = [int(c/len(samples)) for c in avg]

# Tolerance: allow close colors
tolerance = 30

for y in range(height):
    for x in range(width):
        r,g,b,a = pixels[x,y]
        if abs(r-avg[0]) <= tolerance and abs(g-avg[1]) <= tolerance and abs(b-avg[2]) <= tolerance:
            # make transparent
            pixels[x,y] = (r,g,b,0)

# Save result overwriting original path
img.save(logo_path)
print('Saved transparent logo to', logo_path)
print('Original backed up at', backup_path)
