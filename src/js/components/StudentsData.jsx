import React from 'react';
import ExpansionPanel, {
	ExpansionPanelSummary,
	ExpansionPanelDetails
} from 'material-ui/ExpansionPanel';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';
import { InputLabel } from 'material-ui/Input';

class StudentsData extends React.Component {
	constructor() {
		super();
		this.state = {
			class: 'Select Class',
			section: 'Select Section',
			subject: 'Select Subject',
			display: 'none'
		};
	}
	convertToDate(str) {
		const myDate = new Date(str);
		return myDate;
	}
	renderStudentsData(item, str) {
		if (arguments[1] === 'keys') {
			return Object.keys(item).map((key, index) => {
				return <p>{key}</p>;
			});
		} else if (arguments[1] === 'values') {
			return Object.values(item).map((value, index) => {
				if (typeof value === 'boolean') {
					return value ? <p>hafiz</p> : <p>No Hafiz</p>;
				} else {
					return <p>{value}</p>;
				}
			});
		} else {
			return '';
		}
	}

	renderArray() {
		const { data } = this.props;
		return data.map((item, index) => {
			return (
				<ExpansionPanel key={index}>
					<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
						<div className="studentsSummary">
							{this.renderStudentsData(
								{ ...item.studentHR.studentDetails },
								'values'
							)}
						</div>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<div>
							<div className="studentDetails">
								<h3>Father Details</h3>
								<div className="details">
									<div className="colHeading">
										{this.renderStudentsData(
											item.studentHR.fatherDetails,
											'keys'
										)}
									</div>
									<div className="colItem">
										{this.renderStudentsData(
											item.studentHR.fatherDetails,
											'values'
										)}
									</div>
								</div>

								<h3>Class Details</h3>
								<div className="details">
									<div className="colHeading">
										{this.renderStudentsData(
											item.studentHR.classDetails,
											'keys'
										)}
									</div>
									<div className="colItem">
										{this.renderStudentsData(
											item.studentHR.classDetails,
											'values'
										)}
									</div>
								</div>

								<h3>Emergency Details</h3>
								<div className="details">
									<div className="colHeading">
										{this.renderStudentsData(
											item.studentHR.emergencyDetails,
											'keys'
										)}
									</div>
									<div className="colItem">
										{this.renderStudentsData(
											item.studentHR.emergencyDetails,
											'values'
										)}
									</div>
								</div>
								<div
									className="btn"
									onClick={() => {
										this.setState({ display: 'flex' });
									}}
								>
									<Button variant="fab" color="secondary" aria-label="edit">
										<Icon>edit_icon</Icon>
									</Button>
								</div>
							</div>
							<div
								className="studentForm"
								style={{ display: this.state.display }}
							>
								<div className="heading">
									<p>Student Details</p>
								</div>
								<div className="studentDetailsForm">
									<div className="textFields">
										<TextField
											id="studentName"
											label="Name"
											type="search"
											required
											value={item.studentHR.studentDetails.studentName}
										/>
									</div>
									<div className="textFields">
										<TextField
											id="studentRollNo"
											label="Roll No"
											type="search"
											value={item.studentHR.studentDetails.bForm}
											required
										/>
									</div>
									<div className="textFields">
										<TextField
											id="studentDob"
											type="date"
											required
											value={this.convertToDate(
												item.studentHR.studentDetails.dob
											)}
										/>
									</div>
									<div className="textFields">
										<TextField
											id="studentIdMark"
											label="Id Mark"
											multiline
											rowsMax="4"
											required
											value={item.studentHR.studentDetails.idMark}
										/>
									</div>
									<div className="textFields" style={{ color: 'red' }}>
										<span>Hafiz</span>
										<Checkbox
											label="Hafiz"
											defaultChecked={item.studentHR.studentDetails.hafiz}
										/>
									</div>
									<div className="textFields" style={{ color: 'red' }}>
										<span>&nbsp;</span>
									</div>
								</div>
							</div>
							<div
								className="studentForm"
								style={{ display: this.state.display }}
							>
								<div className="heading">
									<p>Father Details</p>
								</div>
								<div className="studentDetailsForm">
									<div className="textFields">
										<TextField
											id="fatherName"
											label="Name"
											type="search"
											required
											value={item.studentHR.fatherDetails.fatherName}
										/>
									</div>
									<div className="textFields">
										<TextField
											id="fatherCnic"
											label="Cnic"
											type="number"
											value={item.studentHR.fatherDetails.fatherCnic}
											required
										/>
									</div>
									<div className="textFields">
										<TextField
											id="phoneNo"
											label="Phone"
											type="number"
											value={item.studentHR.fatherDetails.fatherMobile}
											required
										/>
									</div>
									<div className="textFields">
										<TextField
											id="fahterAddress"
											label="Address"
											multiline
											rowsMax="4"
											value={item.studentHR.fatherDetails.fatherAddress}
											required
										/>
									</div>
								</div>
							</div>

							<div
								className="studentForm"
								style={{ display: this.state.display }}
							>
								<div className="heading">
									<p>Class Details</p>
								</div>
								<div className="studentDetailsForm">
									<div className="textFields">
										<TextField
											id="addmissionNo"
											label="Addmission No"
											type="search"
											value={item.studentHR.classDetails.addmissionNo}
											required
										/>
									</div>
									<div className="textFields" style={{ padding: 17 }}>
										<Select
											required
											value={this.state.class}
											onChange={e => {
												this.setState({
													class: e.target.value
												});
											}}
										>
											<MenuItem value="Select Class">
												<em>Select Class</em>
											</MenuItem>
											<MenuItem value={8}>8th</MenuItem>
											<MenuItem value={9}>9th</MenuItem>
											<MenuItem value={10}>10th</MenuItem>
										</Select>
									</div>
									<div className="textFields" style={{ padding: 17 }}>
										<Select
											value={this.state.section}
											required
											onChange={e => {
												this.setState({
													section: e.target.value
												});
											}}
										>
											<MenuItem value="Select Section">
												<em>Select Section</em>
											</MenuItem>
											<MenuItem value={'a'}>A</MenuItem>
											<MenuItem value={'b'}>B</MenuItem>
											<MenuItem value={'c'}>C</MenuItem>
										</Select>
									</div>
									<div className="textFields" style={{ padding: 17 }}>
										<Select
											value={this.state.subject}
											required
											onChange={e => {
												this.setState({
													subject: e.target.value
												});
											}}
										>
											<MenuItem value="Select Subject">
												<em>Select Subject</em>
											</MenuItem>
											<MenuItem value={'ICT'}>ICT</MenuItem>
											<MenuItem value={'SE'}>SE</MenuItem>
											<MenuItem value={'TOA'}>TOA</MenuItem>
										</Select>
									</div>
								</div>
							</div>

							<div
								className="studentForm"
								style={{ display: this.state.display }}
							>
								<div className="heading">
									<p>Emergency Details</p>
								</div>
								<div className="studentDetailsForm">
									<div className="textFields">
										<TextField
											id="emergencyName"
											label="Name"
											type="search"
											required
										/>
									</div>
									<div className="textFields">
										<TextField
											id="emergencyNo"
											label="Number"
											type="search"
											required
										/>
									</div>
									<div className="textFields">
										<TextField
											id="emergencyRelation"
											type="search"
											label="Relation"
											required
										/>
									</div>
									<div className="textFields">
										<TextField
											id="emergencyMedicalNotes"
											label="Medical Notes"
											multiline
											rowsMax="3"
											required
										/>
									</div>
								</div>
							</div>
						</div>
					</ExpansionPanelDetails>
				</ExpansionPanel>
			);
		});
	}

	render() {
		const { data } = this.props;
		console.log('this is data in StudentsData Component', data);
		return <div>{this.renderArray()}</div>;
	}
}

export default StudentsData;
