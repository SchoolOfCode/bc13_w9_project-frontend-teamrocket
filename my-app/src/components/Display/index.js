import Header from '../Header/index';
import Body from '../Body/index';
import { pageTypes } from '../../data/pageTypes';
import { useState } from 'react';

export default function Display() {

	const [decisionTitle, setDecisionTitle] = useState("");
	const [index, setIndex] = useState(0);
	const [pageType, setPageType] = useState(pageTypes[index]);
	const [voters, setVoters] = useState(0);
	const [votersArr, setVotersArr] = useState([]);
	const [votes, setVotes] = useState([]);
	const [votesArr, setVotesArr] = useState([])
	const [options, setOptions] = useState([])
	const [inputArr, setInputArr] = useState([])
	const [optionsArr, setOptionsArr] = useState([])
	const [proCon, setProCon] = useState([])

	function numberOfUsers(event){
		setVoters(Number(event.target.value))
	}

	function inputNumberOfUsers(){
		let newArr = [];
		for (let i = 0; i < voters; i++){
			newArr = [...newArr, {name: i + 1, vote: "", voted: false}]
		}
		setVotersArr(newArr);
	}

	function inputDecisionName(event){
		setDecisionTitle(event.target.value)
	}

	function inputOptions(event){
		let myObj = {};
		myObj[event.target.name] = event.target.value;
		setInputArr([...inputArr, myObj]);
		const map1 = new Map();
		inputArr.map(object => map1.set(Object.keys(object)[0], Object.values(object)[0]));
		const arr = Array.from(map1, (key, value) => {
		 	return key[1];
		});
		setOptions(arr);
	}

	function handleOptionsClick(){
		let newArr = [];
		for (let i = 0; i < options.length; i++){
			newArr = [...newArr, {
				option: options[i],
				votes: 0,
				eliminated: false,
				options: {
					pros: [],
					cons: []
				}
			}]
			setOptionsArr(newArr)
		}
	}

	function proConVote(event){
		let myObj = {};
		myObj[event.target.name] = event.target.value;
		setVotes([...votes, myObj]);
		const map2 = new Map();
		votes.map(object => map2.set(Object.keys(object)[0], Object.values(object)[0]))
		console.log(map2)
		const arr = Array.from(map2, (key, value) => {
		  	return key[1];
		});
		setVotesArr(arr)
		// for (let i = 0; i < arr.length; i++){
		// 	console.log(i)
		// }
	}

	function proConSubmitVote(){
		console.log("proConSubmitVote")
		console.log(votesArr)
	}


	function inputProCon(event){
		// console.log(event.target.value)
		// let myObj = {};
		// myObj[event.target.name] = event.target.value
		// let arr = [myObj]
		// setProCon([...proCon, myObj])
		// setProCon([...proCon, ...myObj])
		// console.log(proCon)
		// const map1 = new Map();
		// inputArr.map(object => map1.set(Object.keys(object)[0], Object.values(object)[0]))
		// const arr = Array.from(map1, (key, value) => {
		//  	return key[1];
		// });
		// setProCon(arr)
	}

	function handleProConClick(event){

		// optionsArr.map(el => {
		//  	if (el.option)
		// });
	}

	function changePage() {
		setPageType(pageTypes[index + 1]);
		setIndex(index+1)
	}

	return (
		<div className='Display'>
			<Header 
			decisionTitle={decisionTitle}
			pageType={pageType}
			/>
			<Body 
				decisionTitle={decisionTitle}
				pageType={pageType} 
				changePage={changePage}  
				inputDecisionName={inputDecisionName}
				numberOfUsers={numberOfUsers}
				inputNumberOfUsers={inputNumberOfUsers} 
				inputOptions={inputOptions}
				inputProCon={inputProCon}
				handleProConClick={handleProConClick}
				handleOptionsClick={handleOptionsClick}
				optionsArr={optionsArr}
				votersArr={votersArr}
				proConVote={proConVote}
				proConSubmitVote={proConSubmitVote}
			/>
		</div>    
	);
}