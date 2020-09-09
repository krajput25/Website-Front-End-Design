/*var menu = document.getElementById('menu')
var list = document.getElementById('nav')
var exit = document.getElementById('exit')


menu.addEventListener("click", function(){
	list.classList.remove('hide-in-mobile')
})

exit.addEventListener("click", function(){
	list.classList.add('hide-in-mobile')
})

/*var is the keyword used to declare varaibles and has a global 
and local scope(within functions) as well.

getElementById helps store the information relate to the id specified
within the parentheses into the variable declared.

addEventListener takes note of the event taking place which in this
case is clicking on the manu and exit buttons. once we have clicked 
on the button represented by the variable names we declare, the
code written within will execute.

classList enables the script to take note of all the classes mentioned
within the element with the id that we have specified and then choses\
the on that we want.

remove and add do their jobs as understood but they can also be 
replaced  with the keyword toggle, which basically switches the 
availability of the class - like if it is initally not applied, 
then toggle will apply it to the element and vice-versa.

we declared list to get all the information associated with the 
element that ha the id as nav, hence it took in all the class names
as well.

*/

/*function createCircle(radius){
	return {
		radius,

		write: function(){
			console.log(radius*radius);
		},

		draw: function(){
			console.log('draw');
		}
	};
	

}

const circle = createCircle(1);
circle.draw();
circle.write();



/*first*/



/*var thingsToDo = [];		/*empty array declared*/
/*for(var i = 0; i<1; i++){
	thingsToDo.push(function() {alert('hello' + i);});	
	
	/*the push() method adds new items to the end of an array, and returns the new
	length.
	in contrast to this, if we want to add elements at the beginning
	of an array, use the unshift() method*/

	/*note the syntax for the function : function() {} */
/*
}
for(var k in thingsToDo){		/*this is where we call the function thingsToDO
								without which it wont create the alerts*/

	/*thingsToDo[k]();				
}
/*this creates hello2 twice because by the time this loop is reached
i has reached the value of 2, and that is what is created an alert 
twice because the earlier values are not captured. the array has
two elements (this is stored in k and hence the for..in loop 
iterates twice). but both these values are two and thats wrong*/


/*second*/


/*function createHelloAlert(v){		/*v is local to this function only*/
	/*return function(){alert('hello'+v);}
}	

/*the createHelloAlert() function creates an instance of the alert
at every value of v or i and hence its gets saved*/

/*for(var i=0; i<2; i++){
	thingsToDo.push(createHelloAlert(i));
}

for(var k in thingsToDo){		/*hence this prints out the alerts
								hello0 and hello1 like expected*/
	/*thingsToDo[k]();
}


function Person(first, last){		/*understands the type of input on its own like strinf in this case*/
	/*this.first = first;		/*reference to the parameter*/
	/*this.last = last;
}

var john = new Person("john", "doe");	/*individual instances of the object which is a function created*/
/*var mary = new Person("mary", "deer");

Person.prototype.full = function(){return this.first + " " + this.last};
/*prototype inbuilt property used and new full property defined*/
/*alert(john.full());		/*separate alerts created with the modifications made*/
/*alert(mary.full());*/

console.log('Hello');