import React from 'react';
import ExpansionPanel,
{
	ExpansionPanelSummary,
	ExpansionPanelDetails
} from 'material-ui/ExpansionPanel';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from 'material-ui/Button';
import Icon from "material-ui/Icon";
import TextField from 'material-ui/TextField'
import Checkbox from 'material-ui/Checkbox'


class StudentsData extends React.Component{
	constructor(){
		super();
	}

	renderStudentsData(item,str){
		if(arguments[1]==='keys'){
			return Object.keys(item).map((key,index)=>{
				return <p>{key}</p>
			})
		}
		else if(arguments[1]==='values'){
			return Object.values(item).map((value,index)=>{
			if(typeof value ==='boolean'){
				return value?<p>hafiz</p>:<p>No Hafiz</p>
			}
			else{
				return <p>{value}</p>
			}
		})
		}
		else{
			return ''
		}
		
	}

	renderArray(){
		const {data}=this.props;
		return data.map((item,index)=>{
			return (
			<ExpansionPanel key={index}>
				<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
				<div className="studentsSummary">
				{
					this.renderStudentsData({...item.studentHR.studentDetails},'values')
				}
				</div>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails>
				<div>
					<div className="studentDetails">
						<h3>Father Details</h3>
						<div className="details">
							<div className="colHeading">
								{this.renderStudentsData(item.studentHR.fatherDetails,'keys')}
							</div>
							<div className="colItem">
								{this.renderStudentsData(item.studentHR.fatherDetails,'values')}
							</div>
						</div>

						<h3>Class Details</h3>
						<div className="details">
							<div className="colHeading">
								{this.renderStudentsData(item.studentHR.classDetails,'keys')}
							</div>
							<div className="colItem">
								{this.renderStudentsData(item.studentHR.classDetails,'values')}
							</div>
						</div>

						<h3>Emergency Details</h3>
						<div className="details">
							<div className="colHeading">
								{this.renderStudentsData(item.studentHR.emergencyDetails,'keys')}
							</div>
							<div className="colItem">
								{this.renderStudentsData(item.studentHR.emergencyDetails,'values')}
							</div>
						</div>
						<div className="btn">
							<Button variant="fab" color="secondary" aria-label="edit">
				        <Icon>edit_icon</Icon>
				      </Button>
						</div>
					</div>
					<div className="studentForm">
						<div className="heading"><p>Student Details</p></div>
						<div className="studentDetailsForm">
							<div className="textFields">
								<TextField
				          id="studentName"
				          label="Name"
				          type="search"
        				/>
							</div>
							<div className="textFields">
								<TextField
				          id="studentRollNo"
				          label="Roll No"
				          type="search"
        				/>
							</div>
							<div className="textFields">
								<TextField
				          id="studentDob"
				          type="date"
        				/>
							</div>
							<div className="textFields">
								<TextField
				          id="studentAddress"
				          label="Address"
				          multiline
          				rowsMax="4"
        				/>
							</div>
							<div className="textFields" style={{color:'red',width:1050}}>
								<span>Hafiz</span>
								<Checkbox label="Hafiz"/>
							</div>
						</div>
					</div>
				</div>	
				</ExpansionPanelDetails>
			</ExpansionPanel>
			)
		})
			
	}

	render(){
		const {data}=this.props;
		console.log('this is data in StudentsData Component',data)
		return (
			<div>
				{
					this.renderArray()
				}
			</div>
		)
	}
}

export default StudentsData;