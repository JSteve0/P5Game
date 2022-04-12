## This must be run locally and manually put into Game/Map.js 

from PIL import Image

im = Image.open('map.png')

print(im.format, im.size, im.mode)
print(im.getpixel((0, 0))[0:3])

with open('map.txt', 'w') as f:
    f.write('let map = [\n')
    for i in range(im.size[0]):
        f.write('\t[')
        for j in range(im.size[1]):
            if (im.getpixel((j, i))[0:3] == (255, 255, 255)):
                f.write('0')
            elif (im.getpixel((j, i))[0:3] == (0, 0, 0)):
                f.write('1')
            elif (im.getpixel((j, i))[0:3] == (0, 0, 255)):
                f.write('2')
            elif (im.getpixel((j, i))[0:3] == (0, 255, 0)):
                f.write('3')
            elif (im.getpixel((j, i))[0:3] == (255, 0, 0)):
                f.write('4')
            else:
                f.write('0,')
            if (j != im.size[0] - 1):
                f.write(',')
        f.write(']')
        if (i != im.size[0] - 1):
            f.write(',\n')
    f.write('\n];')