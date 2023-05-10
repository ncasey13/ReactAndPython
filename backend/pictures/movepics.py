import subprocess
import time

j = 0
while j < 10:
    for i in range(1, 9):
      file = 'Picture{}.png'.format(i)
      print(file)
      subprocess.run(['mv', file, 'currpic.png'])
      subprocess.run(['cp', 'currpic.png', '../ReactAndPython/frontend/src/pictures/'])
      subprocess.run(['mv', 'currpic.png' , file])
      time.sleep(0.5)
    j += 1