import Ember from 'ember';
import gql from 'graphql-tag';
import UnsubscribeRoute from 'ember-apollo-client/mixins/unsubscribe-route';

export default Ember.Service.extend(UnsubscribeRoute, {
	apollo: Ember.inject.service(),
	topGames() {
	    let query = gql`
	      query topGames{
			  topGames{
					Rank
					Name
					Platform
					Year
					Genre
					Publisher
					NASales
					EUSales
					JPSales
					OtherSales
					GlobalSales
				}
			}
	    `;
	    let variables = {};
	   return this.get('apollo').query({ query, variables },'topGames').then((result)=>{	    	
	    	 return result;
	    });	 
	},
	topGenres() {
	    let query = gql`
	      query topGenres{
			  topGenres{
					name
					value
				}
			}
	    `;
	    let variables = {};
	   return this.get('apollo').query({ query, variables },'topGenres').then((result)=>{	   	
   			let resArr=[];
   			resArr.push(["Genre","Value"]);
	   		for(let i=0,l=result.length;i<l;i++){
		   				resArr.push([result[i].name,result[i].value]);
		   	}	  	
			return resArr;
	    });	 
	},
	countriesExpenditure() {
	    let query = gql`
	      query countriesSpentGames{
			  countriesSpentGames{
					name
					value
				}
			}
	    `;
	    let variables = {};
		   return this.get('apollo').query({ query, variables },'countriesSpentGames').then((result)=>{	    	
		    		let resArr=[];
		   			resArr.push(["Country","Value"]);
		   			for(let i=0,l=result.length;i<l;i++){
		   				resArr.push([result[i].name,result[i].value]);
		   			}			   	  
					return resArr;
		    });	 
	},
	topGenresTitleCount() {
	    let query = gql`
	      query topGenres{
			  topGenres{
					name
					value
				}
			}
	    `;
	    let variables = {};
	   return this.get('apollo').query({ query, variables },'topGenres').then((result)=>{	    	
	    	 return result;
	    });	 
	},
	topPublishers() {
	    let query = gql`
	      query topPublishers{
			  topPublishers{
					name
					value
				}
			}
	    `;
	    let variables = {};
	   return this.get('apollo').query({ query, variables },'topPublishers').then((result)=>{	    	
	    	let resArr=[];
   			resArr.push(["Publisher","Value"]);
	   		for(let i=0,l=result.length;i<l;i++){
		   		resArr.push([result[i].name,result[i].value]);
		   	}		
			return resArr;
	    });	 
	},
	topPublishersTitleCount() {
	    let query = gql`
	      query topPublishersTitleCount{
			  topPublishersTitleCount{
					name
					value
				}
			}
	    `;
	    let variables = {};
	   return this.get('apollo').query({ query, variables },'topPublishersTitleCount').then((result)=>{	    	
	    	 return result;
	    });	 
	},
	revenueByGenreYear(asArray=true) {
	    let query = gql`
	      query revenueByGenreYear{
			  revenueByGenreYear{
			  		Year
					Action
					Adventure
					Fighting
					Misc
					Platform
					Puzzle
					Racing
					RolePlaying
					Shooter
					Simulation
					Sports
					Strategy
				}
			}
	    `;
	    let variables = {};
	   return this.get('apollo').query({ query, variables },'revenueByGenreYear').then((result)=>{	    	
	    	let resArr=[];
   			if(!asArray){
   				return result;
   			}
   			resArr.push(["Year","Action","Adventure","Fighting","Platform","Racing","Role Playing","Shooter","Simulation","Sports","Strategy"])
	   		for(let i=0,l=result.length;i<l;i++){
		   		resArr.push([result[i].Year,
					   		result[i].Action,
							result[i].Adventure,
							result[i].Fighting,						
							result[i].Platform,						
							result[i].Racing,
							result[i].RolePlaying,
							result[i].Shooter,
							result[i].Simulation,
							result[i].Sports,
							result[i].Strategy]);
		   	}		
			return resArr;
			
	    });	 
	},
	revenueByPublisher(cumulative=false) {
	    let query = gql`
	      query revenueByPublisher{
			  revenueByPublisher{
			  		Year
					Nintendo 
					Microsoft_GS 
					TakeTwo
					SCE 
					Activision
					Ubisoft 
					Bethesda 
					EA 
					Sega
					SquareSoft
					Atari 
					_505Games 
					Capcom
					GT_Interactive
					Konami
					Square_Enix
					LucasArts
					Virgin_Interactive
					Universal_Interactive
					Eidos_Interactive
				}
			}
	    `;
	    let variables = {};
	   return this.get('apollo').query({ query, variables },'revenueByPublisher').then((result)=>{	    	
	    	let resArr=[];
	    	resArr.push(["Year","Nintendo","Microsoft GS","Take-Two", "SCE","Activision","Ubisoft" ,"Bethesda" ,"EA" ,"Sega","Square Soft","Atari" ,
					"505 Games" ,"Capcom","GT Interactive",	"Konami","Square Enix",	"LucasArts","Virgin Interactive","Universal Interactive",
					"Eidos Interactive"]);

			
   			if(cumulative){
   					let cumulativeCache=[
								(result[0].Nintendo),
								(result[0].Microsoft_GS),
								(result[0].TakeTwo)  ,
								(result[0].SCE),
								(result[0].Activision),
								(result[0].Ubisoft),
								(result[0].Bethesda) ,
								(result[0].EA) ,
								(result[0].Sega),
								(result[0].SquareSoft),
								(result[0].Atari),
								(result[0]._505Games) ,
								(result[0].Capcom),
								(result[0].GT_Interactive),
								(result[0].Konami),
								(result[0].Square_Enix),
								(result[0].LucasArts),
								(result[0].Virgin_Interactive),
								(result[0].Universal_Interactive),
								(result[0].Eidos_Interactive)
								];
					
	   			for(let i=0,l=result.length;i<l;i++){
	   				resArr.push([result[i].Year,
	   							cumulativeCache[0]=(result[i].Nintendo)+(cumulativeCache[0]),
								cumulativeCache[1]=(result[i].Microsoft_GS)+(cumulativeCache[1]),
								cumulativeCache[2]=(result[i].TakeTwo) +(cumulativeCache[2]) ,
								cumulativeCache[3]=(result[i].SCE)+(cumulativeCache[3]) ,
								cumulativeCache[4]=(result[i].Activision)+(cumulativeCache[4]),
								cumulativeCache[5]=(result[i].Ubisoft)+(cumulativeCache[5]),
								cumulativeCache[6]=(result[i].Bethesda)+(cumulativeCache[6]) ,
								cumulativeCache[7]=(result[i].EA)+(cumulativeCache[7]) ,
								cumulativeCache[8]=(result[i].Sega)+(cumulativeCache[8]),
								cumulativeCache[9]=(result[i].SquareSoft)+(cumulativeCache[9]),
								cumulativeCache[10]=(result[i].Atari)+(cumulativeCache[10]) ,
								cumulativeCache[11]=(result[i]._505Games)+(cumulativeCache[11] ) ,
								cumulativeCache[12]=(result[i].Capcom)+(cumulativeCache[12]),
								cumulativeCache[13]=(result[i].GT_Interactive)+(cumulativeCache[13]),
								cumulativeCache[14]=(result[i].Konami)+(cumulativeCache[14]),
								cumulativeCache[15]=(result[i].Square_Enix)+(cumulativeCache[15]),
								cumulativeCache[16]=(result[i].LucasArts)+(cumulativeCache[16]),
								cumulativeCache[17]=(result[i].Virgin_Interactive)+(cumulativeCache[17]),
								cumulativeCache[18]=(result[i].Universal_Interactive)+(cumulativeCache[18]),
								cumulativeCache[19]=(result[i].Eidos_Interactive)+(cumulativeCache[19])
								]);
			   	}
   			}else{   			
		   		for(let i=0,l=result.length;i<l;i++){
			   		resArr.push([result[i].Year,
						   		result[i].Nintendo ,
								result[i].Microsoft_GS ,
								result[i].TakeTwo ,
								result[i].SCE ,
								result[i].Activision,
								result[i].Ubisoft ,
								result[i].Bethesda ,
								result[i].EA ,
								result[i].Sega,
								result[i].SquareSoft,
								result[i].Atari ,
								result[i]._505Games ,
								result[i].Capcom,
								result[i].GT_Interactive,
								result[i].Konami,
								result[i].Square_Enix,
								result[i].LucasArts,
								result[i].Virgin_Interactive,
								result[i].Universal_Interactive,
								result[i].Eidos_Interactive
								]);
			   	}		
		   	}
			return resArr;
	    });	 
	},genreRevenueGeo() {
	    let query = gql`
	      query genreRevenueGeo{
			  genreRevenueGeo{
						Country
						Genre
						Amount 
				}
			}
	    `;
	    let variables = {};
	   return this.get('apollo').query({ query, variables },'genreRevenueGeo').then((result)=>{	   
	  		let resArr=[];
	    	resArr.push(["Country","Genre","Amount"]); 	
	    	for(let i=0,l=result.length;i<l;i++){
	    		resArr.push([
	    			result[i].Country,
	    			result[i].Genre,
	    			result[i].Amount]); 	
	    	}

	    	 return resArr;
	    });	 
	},genreRevenueScatter() {
	    let query = gql`
	      query genreRevenueScatter{
			  genreRevenueScatter{
						Genre
						US
						EU
						Japan
						Others
				}
			}
	    `;
	    let variables = {};
	   return this.get('apollo').query({ query, variables },'genreRevenueScatter').then((result)=>{	   
	  		let resArr=[];
	    	resArr.push(["Genre","North America","EU","Japan","Others"]); 	
	    	for(let i=0,l=result.length;i<l;i++){
	    		resArr.push([
	    			result[i].Genre,
	    			result[i].US,
	    			result[i].EU,
	    			result[i].Japan,
	    			result[i].Others]); 	
	    	}
	    
	    	 return resArr;
	    });	 
	},	
	revenueByRegion() {
	    let query = gql`
	      query revenueByRegion{
			  revenueByRegion{
					name
					spentGames
				}
			}
	    `;
	    let variables = {};
		   return this.get('apollo').query({ query, variables },'revenueByRegion').then((result)=>{	    	
		    		let resArr=[];
		   			resArr.push(["Country","Value"]);
		   			for(let i=0,l=result.length;i<l;i++){
		   				resArr.push([result[i].name,result[i].spentGames]);
		   			}			   	  
					return resArr;
		    });	 
	},platformRevenueScatter() {
	    let query = gql`
	      query platformRevenueScatter{
			  platformRevenueScatter{
						Platform
						US
						EU
						Japan
						Others
				}
			}
	    `;
	    let variables = {};
	   return this.get('apollo').query({ query, variables },'platformRevenueScatter').then((result)=>{	   
	  		let resArr=[];
	    	resArr.push(["Platform","North America","EU","Japan","Others"]); 	
	    	for(let i=0,l=result.length;i<l;i++){
	    		resArr.push([
	    			result[i].Platform,
	    			result[i].US,
	    			result[i].EU,
	    			result[i].Japan,
	    			result[i].Others]); 	
	    	}
	    
	    	 return resArr;
	    });	 
	},	

});


