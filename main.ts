#! /usr/bin/evn node
import inquirer from "inquirer"

import chalk from "chalk"

class Student {
    name : string
    constructor (n:string){
        this.name=n
    }
}
class Person{
    students :Student[]=[]
    addStudent(obj:Student){
        this.students.push(obj)
    }    
    
}

const persons = new Person()

const programStrat = async(persons:Person)=>{
    do{
    console.log(chalk.blue("\n\twelcome to Object Oriented Program !\n"));
    const ans = await inquirer.prompt({
        name:"select",
        type:"list",
        message:chalk.green("Whom Would You Like to Interact With?"),
        choices:["staff","student","exit"]
    })
    if(ans.select == "staff"){
        console.log(chalk.yellow("\n\tYou approach the staff room. Please feel to ask any questions.\n"));
    }
    else if (ans.select == "student"){
    const ans = await inquirer.prompt({
            name:"student",
            type:"input",
            message:chalk.yellow("\n\tEnter the student's name you wish to engage with:?\n"),
            
            
        })
        const student = persons.students.find(val => val.name === ans.student)
        if (!student){
            const name = new Student(ans.student)
            persons.addStudent(name)
            console.log(chalk.yellow(`\n\tHellow i am ${name.name}. Nice to meet you!\n`));
            console.log(chalk.red.bold("New student added"));
            console.log(chalk.yellow("\n\tCrurent student list\n"))
            console.log(persons.students);
        } else {
            console.log(chalk.yellowBright.bold(`\n\tHello i am ${student.name}. Nice to See You Again!\n`));
            console.log(chalk.red.bold("\n\tExisting student list:\n"));
        }
    }else if(ans.select == "exit"){
        console.log(chalk.red("\n\tGoodbye!\n"));
        process.exit();
    }
    }while(true)
   
} 
programStrat(persons)
    




