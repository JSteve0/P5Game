## @Author - Justin

## This must be run locally and manually put into Game/Map.js 

from PIL import Image
import time
from tqdm import tqdm

output = 0
color = 1

player = ('1', (0, 0, 0))
block = ('2', (0, 0, 255))
NoteBlock = ('3', (0, 255, 0))
zombie = ('4', (255, 0, 0))

im = Image.open('map.png')

print('Format: ' + im.format)
print('Size: ', end =" ")
print(im.size)
print('Pixel Mode: ' + im.mode + '\n')

print('Starting...')

start = time.time()

with open('map.txt', 'w') as f:
    f.write('let map = [\n')
    for i in tqdm(range(im.size[0]), desc="Rows", colour='green'):
        f.write('\t[')
        for j in range(im.size[1]):
            if (im.getpixel((j, i))[0:3] == player[color]):
                f.write(player[output])
            elif (im.getpixel((j, i))[0:3] == block[color]):
                f.write(block[output])
            elif (im.getpixel((j, i))[0:3] == NoteBlock[color]):
                f.write(NoteBlock[output])
            elif (im.getpixel((j, i))[0:3] == zombie[color]):
                f.write(zombie[output])
            else:
                f.write('0')
            if (j != im.size[0] - 1):
                f.write(',')
        f.write(']')
        if (i != im.size[0] - 1):
            f.write(',\n')
    f.write('\n];')

end = time.time()

print('Success')
print(f"\nFinished in {end-start} seconds.")