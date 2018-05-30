Here's the command to download mp3 files recursively, with a depth of 2 subdirectories and save them in ~/Music:

`wget -c -A mp3 -r -l 2 http://www.someurl.com/band_name* -P ~/Music/`
