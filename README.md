This repository is a place for you to learn Javascript (ECMASript2015 and above), and challenge your mentoring skills.
By adhering to a culture of being helful to others, you will learn the foudations of the language at a much quicker pace than you would on your own.

## How it works

1. Pick-up a technical aspect of the ECMAScript language you'd like to gain practice with (e.g. [Grammar and types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_Types)).
* Working on a branch, create a code sample demonstrating how the language deals with this specific topic. Make sure to follow the [guidlines](#guidelines-for-writing-useful-problems) and to add your code sample within the proper directory (see [Directory structure](#directory-structure)).
* Now, turn your code sample into a problem. To do so, include a comment at the top of your file presenting the problem. Make your code incomplete by removing key lines. Leave enough of the original code to help the user figure out how they should fix the problem. 
* Squash all your commits into one, rebase against the latest state of master, and make a pull request.

## Guidelines for writing useful problems

Pull requests will be merged when the following applies:

1. The code has an obvious pedagogic interest and demonstrates an inherent specificity of the Javascript/ECMAScript language
- The code for the problem belong to one files named after the the problem at stake (e.g. `var-const-let.js`. When a problem with the name you want to give already exists, add a number before the extension name as in `var-const-let-1.js`.
- The source code for your problem is organised as follows (note: replace what's between  `<` and `>` as appropriate): 

    ```javascript
    /**
     * Problem instructions: <Give general instructions here. You can then be add more specific comments *                        within the code examples>
     * Relevant resources:
     * - <link 1>
     * - <link 2>
     */

    function problem1(){
      // code for problem1
    }

    function problem2(){
      // code for problem2
    }

    /**
     * Solution - below is a base64 blob of the solution.
     *
    --begin--
    < 
      Here goes a base64-encrypted string of your solution (all problems). To encrypt a code sample use:
      echo "<code>" | base64
      and to decrypt:
      echo "base64-blob" | base64 -d 
      Make sure you don't add spaces or line returns to the blob.
    >
    --end--
     *
     */
    ```
- As demonstrated above, a problem can feature several use cases relevant to the topic. Each demonstrated within their own function. If you only feature one example, omit the function definition.

## Directory structure

Each directory in this repository is named after one chapter of the [MDN Javascript user guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide). It is a good idea before creating any exercise within any directory, to check the relevant chapter. It contains examples that could be used here, but more importantly it will help you make sure you know enough about the topic.

## Testing

Testing is not in place just yet.

## Other contributions

Partial rewrites of this readme are totally welcome. For any other idea, like changes of conventions that would require change in multiple or all problems, please open a ticket on the [issue board]() before (or alongside) sending any pull request.

