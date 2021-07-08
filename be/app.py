#!/usr/bin/env python3
import random
import string
import os
from flask import Flask
from flask import json
from flask import request

app: Flask = Flask(__name__)


@app.route('/')
def random_alphanumerics():
    length = random.randint(5, 30) # define the length of the alphanumeric string randomly between a range
    output = ''
    for i in range(length):
        output += random.choice(string.ascii_lowercase + string.digits) # create our alphanumeric string
    x = random.randint(0, 9) # the whitespaces before shouldn't be more than 9
    y = random.randint(0, 9) # the whitespaces after shouldn't be more than 9
    output = ' '*x + output + ' '*y # put them altogether
    return output

## let's define a function for creating a string of random alphabetical characters
def random_string():
    length = random.randint(5, 30) # define the length of the alphabetical string randomly between a range
    output = ''.join(random.choice(string.ascii_lowercase) for x in range(length)) # we are using ascii lowercase so that encoding doesn't cause our file size to be unpredictable
    return output

   # let's define a function for creating a random integers and converting them to a string
def random_int():
    output = random.randint(0, 10000)
    intToStr = '{}'.format(output)
    return intToStr

        # let's define a function for creating random floats and converting them to a string
def random_float():
    length = random.randint(1, 10) # let's make sure the float is between a randomly chosen decimal place
    output = round(random.uniform(0.0, 10000.0), length)
    floatToStr = '{}'.format(output)
    return floatToStr

fileName = 'output_file.txt'

open(fileName, 'w')

fileSize = os.stat(fileName).st_size

with open(fileName, 'a') as myFile:
    print('Random data write has started in ' + fileName + '...')
    while fileSize < 2000000:
        function_list = [random_alphanumerics, random_string, random_int, random_float]
        dataType = random.choice(function_list)
        output = dataType()
        myFile.write(output + ', ')
        fileSize += len(output) + 2

    print('Final file size:', fileSize / 200000, 'MB')
    myFile.close()


if __name__ == '__main__':
    app.run(debug=True)
