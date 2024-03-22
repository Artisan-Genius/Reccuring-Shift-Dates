import React, { useEffect, useState } from 'react'
import { View, StyleSheet,Button } from 'react-native'
import { v4 as uuidv4 } from 'uuid';


const Recurring = (props) => {
	const { color,text,startDate,endDate,frequency,occurence,repetitions,saveToDatabase} = props

	const occurrences = []
//Function that creates new occurence based on repetition type
const createRecurrences = () => {

	let startDateNew = new Date(startDate)
	let endDateNew = new Date(endDate)

	for (let i = 0; i < occurence; i++) {

		let currentStartDate = new Date(startDateNew)
		let currentEndDate = new Date(endDateNew)
	

		if (frequency === 'weekly') {
			// Adjust currentStartDate by the number of weeks
			currentStartDate.setDate(currentStartDate.getDate() + 7 * i); // Adjust by weeks
			currentEndDate.setDate(currentEndDate.getDate() + 7 * i); // Adjust by weeks
		  } else if (frequency === 'monthly') {
			// Adjust by months - consider different month lengths & leap years in real applications
			currentStartDate.setMonth(currentStartDate.getMonth() + i);
			currentEndDate.setMonth(currentEndDate.getMonth() + i);
		  } else if (frequency === 'annually') {
			// Adjust by years
			currentStartDate.setFullYear(currentStartDate.getFullYear() + i);
			currentEndDate.setFullYear(currentEndDate.getFullYear() + i);
		  } else if (frequency === 'daily') {
			// Adjust by days
			currentStartDate.setDate(currentStartDate.getDate() + i);
			currentEndDate.setDate(currentEndDate.getDate() + i);
		  }

		       // Create occurrence object with unique ID
			   const occurrenceObject = {
				id: uuidv4(),
				startDate: currentStartDate,
				endDate: currentEndDate
			  };
			  occurrences.push(occurrenceObject);
	}


	setDate(occurrences)
}

//Button Click
	const handleRecurrenceChange = () => {
		createRecurrences()
      }

// log data to database
const log = () => {
    saveToDatabase()    
}

// add data for startDate
const setDate = (occurrences) =>{
for(let i= 0; i < occurrences.length; i++){
	saveToDatabase(occurrences[i].id,occurrences[i].startDate, occurrences[i].endDate)
    console.log(occurrences)
}

}
	return(
		
		<View style={styles.wrapper}>
			<Button 
			title={text}
			color={color}
			uppercase={false}
			onPress={handleRecurrenceChange}/>
		</View>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	}
})

export default Recurring
