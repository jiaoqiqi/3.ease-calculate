function calculate_median(arr) {

	var evenNumber = getEvenNumbers(arr);
	var allNumbers = getAllNumbers(arr,evenNumber);
	var midNumber = getMidNumber(allNumbers);

	return midNumber; 
}

function getEvenNumbers(arr)
{
	var evenNumber = [];
	var i = 0 ; 

	for(var j = 0 ; j<arr.length ; j++)
	{
		if(arr[j] % 2 === 0)
		{
			evenNumber[i] = arr[j];
			i++;
		}
	}

	return evenNumber;
}

function  getEvenNumbers(arr,flag)
{
	for(var i = 0 ; i < arr.length ; i++)
	{
		if(arr[i] === flag)
		{
			return i;
		}
	}
}

function getAllNumbers(arr,evenNumber)
{

	var allNumbers=[];
	var i = 0 ; 

	for(var j = 0 ; j < arr.length ; j++)
	{
		var first = getEvenNumbers(arr,evenNumber[0]);

		var last = getEvenNumbers(arr,evenNumber[evenNumber.length-1]);

		if(j >= first && j <= last)
		{
			allNumbers[i]=arr[j];
			i++;
		}
	}

	return allNumbers;
}

function getMidNumber(allNumbers)
{
	var number = parseInt(allNumbers.length/2);

	return allNumbers[number];
}
