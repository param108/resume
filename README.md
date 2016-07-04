# resume
A python + react framework to store and present a resume.

## setup
* On the server create a directory for each block of experience
* Add a metadata file with a json in it.
  json should have 
```json
                  { 
                     "year":"<start>-<end>", 
                     "tech":"comma seperated list of tech used"
                     "perc":"%age of project done in respective tech, comma seperated list of numbers"
                     "tags":"comma seperated list of tags"
                    }
```
* Add a directory 'pics' with images named 1.png, 2.png etc. The carousel will show the images in that order
* Add a directory 'text' with html files that correspond to the images in the "pics" directory
* Repeat for each block of experience
