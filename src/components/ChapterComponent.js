import React , { Component} from 'react';
import {Link} from 'react-router-dom';
import Loader from './Loader';

import './CSS/Chapter.css';
import {SUBJECTS,PHYSICS} from '../shared/subjects';

import {fetchSubTopics,fetchAllTopics} from '../shared/http'

function TopicCard(props){

      return (
	
	<div  class="mat-card-s box-shadow clearfix" >
		
		<div class="card-img-style-s">
			<img src="https://toppscholar-upload.s3.ap-southeast-1.amazonaws.com/content-package/7491303a-9de3-48e4-a8a1-41c873460896.jpg"/>
			<div  class="title-text medium-18 line-height" >{props.details}</div>
		</div>
		
		<div class="img-box-s">      
			<li>12 Concepts</li>
			<li>23 Videos</li>
			<li>0% Learnt</li>
			<li>0% Practiced</li>
		</div>
	</div>
	
	);
}

function SubTopicCard(props){

	return (

	<Link className="link" to={`/chapter/${props.chapter}/${props.details}`}>
	
	<div  class="mat-card box-shadow" >
		
		<div class="card-img-style">
			<img src="https://toppscholar-upload.s3.ap-southeast-1.amazonaws.com/content-package/7491303a-9de3-48e4-a8a1-41c873460896.jpg"/>
		</div>
		
		<div class="img-box">
			<div  class="title-text medium-18 line-height" >{props.details}</div>	
			
			<div class="color-green ">
				<li  class="list-style">12 Concepts</li>
				<li >23 Videos</li>
			</div>
			
			<div  class="list-container">
				<li  class="list-style">{props.details.learn}% Learnt</li>
				<li  class="">{props.details.practice}% Practiced</li>
			</div>
		</div>
	
	</div>
	
	</Link>

	);

}

class Chapter extends Component{

      constructor(props){
		
		super(props);
		this.state = {
			selectedTopic:[],
			selectTopicName:'',
			allTopics:[],
			selectedSubject:"",
			isLoading:true,
			isTopicsLoading:false,
		};
		this.selectTopic = this.selectTopic.bind(this);
	}
	
	async selectTopic(index,name) {
		this.setState({isTopicsLoading:true});

		var temp=[];
		console.log(index)
		temp= await fetchSubTopics(this.state.selectedSubject,name)
		await this.setState({ selectedTopic: temp });
		await this.setState({selectTopicName:name});
		this.setState({isTopicsLoading:false});
		console.log(this.state.selectedTopic,this.state.selectTopicName);
	}

	async componentDidMount(){
		// this.setState({isLoading:true});
		var temp=window.location.href
		var subject=""

		for(var i=temp.length-1;temp[i]!='/';i--) 
			subject=temp[i]+subject
		
		this.setState({selectedSubject:subject})
		var allTopics=await fetchAllTopics(subject)
		this.setState({allTopics:allTopics})
		this.setState({isLoading:false});
	}
     
      render(){
            
		const topics = this.state.allTopics.map((user, i) => {
				return (
					<a onClick={()=>{this.selectTopic(user,user)}}>
							<TopicCard details={user}/>
					</a>
				);
		});

		if(this.state.isLoading){
			return (
				<Loader />
			);
		}

		else{	
            return(
                  <div className="comp clearfix">
                        
				<div class="card-container">
                              {topics}
                        </div>
				
				<div class="card-container-big"> 
				{	
					(() => {
						if (this.state.isTopicsLoading) {
						  return (
							<Loader/>
						  )
						} else {
							return(				
								this.state.selectedTopic.map((user,i)=>{
									if(user.length>18) 
										user=user.slice(0,18)+"..."
									return(
										<SubTopicCard chapter={this.state.selectTopicName} details={user}/>
									);
								})
							);
						}
					  })()

				}
				
      			</div>
				
                  </div>
			);
		}
      }
}

export default Chapter;