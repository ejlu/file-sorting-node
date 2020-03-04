## File sorting system (Node.js)

This program runs in JavaScript and runs in a Node environment (which should be installed to run it).

To run it, write "node bash.js" on the command line while in this directory.

You will see a "prompt >" line. There are two available commands: "ls" shows the files in the current working directory, and "merge" performs the required merge for all of the files in the inputs folder, which it then outputs to an output file in this working directory.

A sample merge command is "merge inputs output.txt"

The program will read all the files in the inputs folder, upon which it will write out the necessary lines in the output.txt file.

---

The merge function makes use of the Node fs and readline modules. fs is used to read files within a directory and output files as well, while readline is used to read through each individual file.

A set (introduced in ES6) is used to store only unique values. The final set is then sorted using JavaScript's built in .sort() function and written to an output file.
