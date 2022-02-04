# similar_names 

### Overview

This exercise I wrote in JavaScript using NodeJS.
The project receives lists of names and synonyms data from text file, in JSON format. For example: 

```javascript 
{
    "names": {"Jacob": 15, "Yaakov": 12, "Yaacov": 10, "Tomer": 13, "Tommer": 4, "Sara": 17},
    "synonyms": {"Jacob": "Yaakov", "Yaacov": "Yaakov", "Tomer": "Tommer"}
}
```

The output of the program is summary of all names with their synonyms count. 
The outout of this input is: 

```javascript 
{ Jacob: 37, Tomer: 17, Sara: 17 }
```

### The flow of the program

1. Build mapping for each name in the synonyms to his final naming. for example here this mapping will look like this:
```javascript 
{
  Jacob: 'Jacob',
  Yaakov: 'Jacob',
  Yaacov: 'Jacob',
  Tomer: 'Tomer',
  Tommer: 'Tomer'
} 
```
2. Calculating the final results using the new synonyms mapping, and counting each name apperance using the mapping.
