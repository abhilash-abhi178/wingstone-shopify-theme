import math
import pathlib
import imageio.v3 as iio

src = pathlib.Path(r'c:/Users/Abhilash Abhi/Documents/Codex/2026-05-19/files-mentioned-by-the-user-chatgpt/wingstone-shopify-theme/scratch/recording.mp4')
out = pathlib.Path(r'c:/Users/Abhilash Abhi/Documents/Codex/2026-05-19/files-mentioned-by-the-user-chatgpt/wingstone-shopify-theme/scratch')

for t in [1, 4, 8, 12, 14.5]:
    frame = iio.imread(src, index=math.floor(t * 30))
    path = out / f'frame-{str(t).replace(".", "p")}.png'
    iio.imwrite(path, frame)
    print(path)
