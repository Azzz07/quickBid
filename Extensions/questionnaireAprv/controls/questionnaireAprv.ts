// import { IControl } from 'mdk-core/controls/IControl';
// 	import { Label } from '@nativescript/core/ui/label';
// 	import { Color } from '@nativescript/core/color';
// 	import { BaseObservable } from 'mdk-core/observables/BaseObservable';
	
// 	export class questionnaireAprv extends IControl {
	
// 	  protected _label: Label = new Label();
// 	  private _observable: BaseObservable;
	
// 	  public view(): any {
// 		if (!this._label) {
// 		  this._label = new Label();
// 		  this._label.text = 'TESTING EXTENSIONS';
// 		  this._label.backgroundColor = new Color('red');
// 		} else {
// 		  this._label.text = 'TESTING EXTENSIONS';
// 		  this._label.backgroundColor = new Color('red');
// 		}
// 		return this._label;
// 	  }
	
// 	  public observable() {
// 		if (!this._observable) {
// 		  this._observable = new BaseObservable(this, this.definition(), this.page());
// 		}
// 		return this._observable;
// 	  }
	
// 	  public setContainer(container: IControl) {
// 		// do nothing
// 	  }
	
// 	  public setValue(value: any, notify: boolean, isTextValue?: boolean): Promise<any> {
// 		// do nothing
// 		return Promise.resolve();
// 	  }
// 	}


// import { IControl } from 'mdk-core/controls/IControl';
// 	import { Label } from '@nativescript/core/ui/label';
// 	import { Color } from '@nativescript/core/color';
// 	import { BaseObservable } from 'mdk-core/observables/BaseObservable';
	
// 	export class questionnaireAprv extends IControl {
	
// 	  protected _label: Label = new Label();
// 	  private _observable: BaseObservable;
	
// 	  public view(): any {
// 		if (!this._label) {
// 		  this._label = new Label();
// 		  this._label.text = 'TESTING EXTENSIONS';
// 		  this._label.backgroundColor = new Color('red');
// 		} else {
// 		  this._label.text = 'TESTING EXTENSIONS';
// 		  this._label.backgroundColor = new Color('red');
// 		}
// 		return this._label;
// 	  }
	
// 	  public observable() {
// 		if (!this._observable) {
// 		  this._observable = new BaseObservable(this, this.definition(), this.page());
// 		}
// 		return this._observable;
// 	  }
	
// 	  public setContainer(container: IControl) {
// 		// do nothing
// 	  }
	
// 	  public setValue(value: any, notify: boolean, isTextValue?: boolean): Promise<any> {
// 		// do nothing
// 		return Promise.resolve();
// 	  }
// 	}

import { IControl } from 'mdk-core/controls/IControl';
import { TextField } from '@nativescript/core/ui/text-field';
import { StackLayout } from '@nativescript/core/ui/layouts/stack-layout';
import { Label } from '@nativescript/core/ui/label';
import { Button } from '@nativescript/core/ui/button';
import { Http } from '@nativescript/core';
import { alert } from '@nativescript/core/ui/dialogs';
import { GestureTypes } from '@nativescript/core/ui/gestures';
import { TextView } from '@nativescript/core/ui/text-view';


//  export class questionnaireAprv extends IControl {
//     private _descriptionLabels: Label[];
//     private _replyFields: Array<TextField | StackLayout>;
//     private _questionnaireIdFields: TextField[];
//     private _docId: string;
//     private _invitationId: string;
//     private _mainStackLayout: StackLayout;
//     private _itemTypes: string[];
//     private _payment: string;
//     private _doc: string;

//     public constructor() {
//         super();
//         this._descriptionLabels = [];
//         this._replyFields = [];
//         this._questionnaireIdFields = [];
//         this._itemTypes = [];
//     }

//     public view(): any {
//         if (!this._mainStackLayout) {
//             this._mainStackLayout = new StackLayout();
//             this._mainStackLayout.orientation = 'vertical';
//             this.fetchAndPopulateData();
//             return this._mainStackLayout;
//         }
//         return this._mainStackLayout;
//     }

//     private updateServiceWithData(): void {
//         let result: string;
//         let updateCount = 0;
//         const totalUpdates = this._questionnaireIdFields.length;
//         for (let i = 0; i < this._questionnaireIdFields.length; i++) {
//             const questionnaireId = this._questionnaireIdFields[i].text;
//             let userReply;
//             const replyControl = this._replyFields[i];
//             if (this._itemTypes[i] === 'RQASTRINGListOfChoices') {
//                 userReply = this._payment;
//             } else if (this._itemTypes[i] === 'RQABOOLEAN') {
//                 userReply = this._doc;
//             } else if (this._itemTypes[i] === 'RQASTRING') {
//                 userReply = replyControl.text;
//             }
//             const updateServiceUrl = `https://fa16f51btrial-dev-quick-bid-mobile-srv.cfapps.us10-001.hana.ondemand.com/odata/v4/whatsapp/Questionnaire_reply_table(doc_id='${this._docId}',invitationId='${this._invitationId}',questionnaire_id='${questionnaireId}')`;
//             const dataPayload = { user_reply: userReply };
//             Http.request({
//                 url: updateServiceUrl,
//                 method: 'PATCH',
//                 headers: { 'Content-Type': 'application/json' },
//                 content: JSON.stringify(dataPayload)
//             }).then(response => {
//                 result = response.statusCode;
//                 updateCount++;
//                 if (updateCount === totalUpdates && result === 200) {
//                     alert('Data updated');
//                 }
//             }).catch(error => {
//                 alert(`There was an error updating the service for questionnaire ID: ${questionnaireId}. Error: ${error.message}`);
//             });
//         }
//     }

//     // private fetchAndPopulateData(): void {
//     //     this._docId = this.context.binding.doc_id;
//     //     this._invitationId = this.context.binding.invitationId;

//     //     const serviceUrl = `https://fa16f51btrial-dev-quick-bid-mobile-srv.cfapps.us10-001.hana.ondemand.com/odata/v4/whatsapp/Questionnaire_table?$filter=doc_id eq '${this._docId}' and invitationId eq '${this._invitationId}'`;
       
//     //     Http.getJSON(serviceUrl).then(response => {
//     //         if (response && response.value && Array.isArray(response.value)) {
//     //             response.value.forEach((item, index) => {
//     //                 if (item) {
//     //                     const qusIdField = new TextField();
//     //                     qusIdField.hint = 'Questionnaire ID';
//     //                     qusIdField.text = item.questionnaire_id || 'No questionnaire ID';
//     //                     qusIdField.editable = false; // Make non-editable
//     //                     qusIdField.visibility = 'collapsed';
//     //                     this._mainStackLayout.addChild(qusIdField);
//     //                     this._questionnaireIdFields.push(qusIdField);
//     //                     const descriptionLabel = new Label();
//     //                     descriptionLabel.fontSize = 20;
//     //                     descriptionLabel.marginBottom = 10;
//     //                     descriptionLabel.marginTop = 30;
//     //                     descriptionLabel.text = item.description || 'No description available';
//     //                     this._mainStackLayout.addChild(descriptionLabel);
//     //                     this._descriptionLabels.push(descriptionLabel);
//     //                     this._itemTypes[index] = item.type;
//     //                     if (item.type === 'RQASTRINGListOfChoices' || item.type === 'RQABOOLEAN') {
//     //                         if (item.type === 'RQASTRINGListOfChoices') {
//     //                             const radioGroupLayout = new StackLayout();
//     //                             this.populateRadioOptions(item, radioGroupLayout, index);
//     //                             this._mainStackLayout.addChild(radioGroupLayout);
//     //                             this._replyFields[index] = radioGroupLayout;
//     //                         } else if (item.type === 'RQABOOLEAN') {
//     //                             const radioGroupLayout = new StackLayout();
//     //                             this.populateBooleanOptions(item, radioGroupLayout, index);
//     //                             this._mainStackLayout.addChild(radioGroupLayout);
//     //                             this._replyFields[index] = radioGroupLayout;
//     //                         }
//     //                     } 
// 	// 					else if (item.type === "RQAATTACH") {
//     //                         // Handle attachments if needed
// 	// 						return;
//     //                     }
// 	// 					 else {
//     //                         const replyField = new TextView();
//     //                         replyField.text = item.user_reply || '';
//     //                         replyField.backgroundColor = 'white';
//     //                         replyField.color = '#000000';
//     //                         replyField.editable = false; // Make non-editable
//     //                         replyField.borderRadius = 5;
//     //                         replyField.borderWidth = 1;
//     //                         replyField.borderColor = '#000000';
//     //                         replyField.padding = 10;
//     //                         replyField.width = 288;
//     //                         replyField.horizontalAlignment = 'left';
//     //                         replyField.marginLeft = 7;
//     //                         replyField.marginRight = 7;

//     //                         replyField.style.cssText = `
//     //                             display: flex;
//     //                             box-sizing: border-box;
//     //                             flex-direction: column;
//     //                             width: 100%;
//     //                             overflow: auto;
//     //                             word-wrap: break-word;
//     //                             white-space: pre-wrap;
//     //                         `;

//     //                         this._mainStackLayout.addChild(replyField);
//     //                         this._replyFields[index] = replyField;

//     //                         replyField.on('textChange', (args) => {
//     //                             const textView = args.object as TextView;

//     //                             if (textView.ios) {
//     //                                 const fixedWidth = textView.ios.frame.size.width;
//     //                                 const newSize = textView.ios.sizeThatFits(CGSizeMake(fixedWidth, Number.MAX_SAFE_INTEGER));
//     //                                 textView.height = newSize.height + 10;
//     //                             } else if (textView.android) {
//     //                                 textView.height = 'auto';
//     //                                 textView.requestLayout();
//     //                             }
//     //                         });

//     //                         if (replyField.android) {
//     //                             replyField.on('loaded', () => {
//     //                                 replyField.android.setMinLines(1);
//     //                                 replyField.android.setMaxLines(5);
//     //                             });
//     //                         }
//     //                     }

//     //                     descriptionLabel.on(GestureTypes.tap, () => {
//     //                         const replyField = this._replyFields[index];
//     //                         if (replyField.visibility === 'collapse') {
//     //                             replyField.visibility = 'visible';
//     //                             descriptionLabel.text = `${item.description} ( Ans )`;
//     //                         } else {
//     //                             replyField.visibility = 'collapse';
//     //                             descriptionLabel.text = `${item.description} ( ans )`;
//     //                         }
//     //                     });
//     //                 }
                    
//     //             });
//     //         } else {
//     //             throw new Error('Invalid response format');
//     //         }
//     //     }).catch(error => {
//     //         console.error('Error fetching data from service:', error);
//     //         alert(`Failed to fetch data: ${error.message}`);
//     //     });
//     // }


//     private fetchAndPopulateData(): void {
        
//         this._docId = this.context.binding.doc_id;
//         this._invitationId = this.context.binding.invitationId;
    
//         const serviceUrl1 = `https://fa16f51btrial-dev-quick-bid-mobile-srv.cfapps.us10-001.hana.ondemand.com/odata/v4/whatsapp/Questionnaire_table?$filter=doc_id eq '${this._docId}' and invitationId eq '${this._invitationId}'`;
//         const serviceUrl2 = `https://fa16f51btrial-dev-quick-bid-mobile-srv.cfapps.us10-001.hana.ondemand.com/odata/v4/whatsapp/Questionnaire_reply_table?$filter=doc_id eq '${this._docId}' and invitationId eq '${this._invitationId}'`;
    
//         // Fetch data from both services concurrently
//         Promise.all([Http.getJSON(serviceUrl1), Http.getJSON(serviceUrl2)])
//             .then(([response1, response2]) => {
//                 if (response1 && response1.value && Array.isArray(response1.value) &&
//                     response2 && response2.value && Array.isArray(response2.value)) {
                        
//                     // Create a map of replies by questionnaire_id
//                     const repliesMap = response2.value.reduce((acc, reply) => {
//                         acc[reply.questionnaire_id] = reply.user_reply;
//                         // ur = reply.user_reply;
//                         // alert(`${reply.user_reply}`)
//                         // alert(`${reply.questionnaire_id}`)
//                         return acc;
//                     }, {} as { [key: string]: string });
    
//                     response1.value.forEach((item, index) => {
//                         if (item && item.type !== "RQAATTACH") {
//                             const qusIdField = new TextField();
//                             qusIdField.hint = 'Questionnaire ID';
//                             qusIdField.text = item.questionnaire_id || 'No questionnaire ID';
//                             qusIdField.visibility = 'collapsed';
//                             this._mainStackLayout.addChild(qusIdField);
//                             this._questionnaireIdFields.push(qusIdField);
    
//                             const descriptionLabel = new Label();
//                             descriptionLabel.fontSize = 18;
//                             descriptionLabel.horizontalAlignment = 'left';
//                             descriptionLabel.marginBottom = 10;
//                             descriptionLabel.marginTop = 30;
//                             descriptionLabel.text = item.description || 'No description available';
//                             this._mainStackLayout.addChild(descriptionLabel);
//                             this._descriptionLabels.push(descriptionLabel);
    
//                             this._itemTypes[index] = item.type;
    
//                             if (item.type === 'RQASTRINGListOfChoices' || item.type === 'RQABOOLEAN') {
//                                 const radioGroupLayout = new StackLayout();
//                                 if (item.type === 'RQASTRINGListOfChoices') {
//                                     this.populateRadioOptions(item, radioGroupLayout, index, repliesMap);
//                                 } else if (item.type === 'RQABOOLEAN') {
//                                     this.populateBooleanOptions(item, radioGroupLayout, index, repliesMap);
//                                 }
//                                 this._mainStackLayout.addChild(radioGroupLayout);
//                                 this._replyFields[index] = radioGroupLayout;
//                             } else if (item.type === "RQASTRING") {
//                                 const replyField = new TextView();
//                                 replyField.hint = `User Reply ${index + 1}`;
//                                 replyField.text = repliesMap[item.questionnaire_id] || ''; // Populate with reply from serviceUrl2
//                                 replyField.backgroundColor = 'white';
//                                 replyField.color = '#000000';
//                                 replyField.editable = false;
//                                 replyField.borderRadius = 5;
//                                 replyField.borderWidth = 1;
//                                 replyField.borderColor = '#000000';
//                                 replyField.padding = 10;
//                                 replyField.width = 288;
//                                 replyField.horizontalAlignment = 'left';
//                                 replyField.marginLeft = 7;
//                                 replyField.marginRight = 7;
//                                 replyField.style.cssText = `
//                                     display: flex;
//                                     box-sizing: border-box;
//                                     flex-direction: column;
//                                     width: 100%;
//                                     overflow: auto;
//                                     word-wrap: break-word;
//                                     white-space: pre-wrap;
//                                 `;
    
//                                 this._mainStackLayout.addChild(replyField);
//                                 this._replyFields[index] = replyField;
    
//                                 replyField.on('textChange', (args) => {
//                                     const textView = args.object as TextView;
//                                     if (textView.ios) {
//                                         const fixedWidth = textView.ios.frame.size.width;
//                                         const newSize = textView.ios.sizeThatFits(CGSizeMake(fixedWidth, Number.MAX_SAFE_INTEGER));
//                                         textView.height = newSize.height + 10;
//                                     } else if (textView.android) {
//                                         textView.height = 'auto';
//                                         textView.requestLayout();
//                                     }
//                                 });
    
//                                 if (replyField.android) {
//                                     replyField.on('loaded', () => {
//                                         replyField.android.setMinLines(1);
//                                         replyField.android.setMaxLines(5);
//                                     });
//                                 }
//                             }
    
//                             descriptionLabel.on(GestureTypes.tap, () => {
//                                 const replyField = this._replyFields[index];
//                                 if (replyField.visibility === 'collapse') {
//                                     replyField.visibility = 'visible';
//                                     descriptionLabel.text = `${item.description} ( Ans )`;
//                                 } else {
//                                     replyField.visibility = 'collapse';
//                                     descriptionLabel.text = `${item.description} ( ans )`;
//                                 }
//                             });
//                         }
//                     });
//                 } else {
//                     throw new Error('Invalid response format');
//                 }
//             })
//             .catch(error => {
//                 console.error('Error fetching data from service:', error);
//                 alert(`Failed to fetch data: ${error.message}`);
//             });
//     }

//     private populateRadioOptions(item, radioGroupLayout: StackLayout, index: number, repliesMap: any): void {
//         const radioOptionsUrl = `https://fa16f51btrial-dev-quick-bid-mobile-srv.cfapps.us10-001.hana.ondemand.com/odata/v4/whatsapp/Dropdown?$filter=questionnaire_id eq '${item.questionnaire_id}'`;
//         Http.getJSON(radioOptionsUrl).then(response => {
//             if (response && response.value && Array.isArray(response.value)) {
//                 response.value.forEach((option, optionIndex) => {
//                     // const radioButtonLayout = this.createRadioButton1(option.dropdown_value, 'groupName', false);
//                     const radioButtonLayout = this.createRadioButton1(option.dropdown_value, index, 'groupName', repliesMap[item.questionnaire_id] === option.dropdown_value);

//                     radioGroupLayout.addChild(radioButtonLayout);

//                     if (index === 0 && optionIndex === 0) {
//                         const textBox = new TextField();
//                         textBox.hint = `Enter text for ${option.dropdown_value}`;
//                         textBox.editable = false; // Make non-editable
//                         textBox.borderRadius = 5;
//                         textBox.borderWidth = 1;
//                         textBox.borderColor = 'black';
//                         textBox.height = 40;
//                         textBox.marginTop = 5;
//                         textBox.paddingLeft = 5;
//                         radioGroupLayout.addChild(textBox);
//                     }
//                 });
//                 radioGroupLayout.visibility = 'visible';
//                 this._replyFields[index] = radioGroupLayout;
//             } else {
//                 throw new Error('Invalid radio options response format');
//             }
// 		}).catch(error => {
// 			console.error('Error fetching radio options:', error);
// 			alert('Failed to fetch radio options.');
// 		});
// }

// private populateBooleanOptions(item, radioGroupLayout: StackLayout, index: number, repliesMap: any): void {
// const yesRadioButton = this.createRadioButton('Yes', index, 'boolean', repliesMap[item.questionnaire_id] === 'Yes');
// const noRadioButton = this.createRadioButton('No', index, 'boolean', repliesMap[item.questionnaire_id] === 'No');

// radioGroupLayout.addChild(yesRadioButton);
// radioGroupLayout.addChild(noRadioButton);
// }

// private createRadioButton(optionText: string, index: number, groupName: string, isSelected: boolean): StackLayout {
// const radioButtonLayout = new StackLayout();
// radioButtonLayout.orientation = 'horizontal';
// radioButtonLayout.verticalAlignment = 'middle';
// radioButtonLayout.padding = 1;
// radioButtonLayout.marginBottom = 7;
// radioButtonLayout.width = '100%';
// const radioIndicator = new Label();
// radioIndicator.text = '';
// radioIndicator.width = 15;
// radioIndicator.height = 15;
// radioIndicator.borderRadius = 10;
// radioIndicator.borderWidth = 1;
// radioIndicator.borderColor = isSelected ? '#51abf1' : 'black';
// radioIndicator.backgroundColor = isSelected ? '#51abf1' : 'white';
// radioIndicator.marginRight = 10;
// const radioLabel = new Label();
// radioLabel.text = optionText;
// radioLabel.fontSize = 16;
// radioButtonLayout.addChild(radioIndicator);
// radioButtonLayout.addChild(radioLabel);
// radioButtonLayout.on(GestureTypes.tap, () => {
// 	const parentLayout = radioButtonLayout.parent as StackLayout;
// 	parentLayout.eachChild((child) => {
// 		if (child instanceof StackLayout) {
// 			const indicator = child.getChildAt(0) as Label;
// 			indicator.borderColor = 'black';
// 			indicator.backgroundColor = 'white';
// 		}
// 		return true;
// 	});
// 	radioIndicator.borderColor = '#51abf1';
// 	radioIndicator.backgroundColor = '#51abf1';

// 	this._doc = optionText;
// });
// radioButtonLayout.isEnabled = false; // Make non-editable
// return radioButtonLayout;
// }

// private createRadioButton1(optionText: string, index: number, groupName: string, isSelected: boolean): StackLayout {
// const radioButtonLayout = new StackLayout();
// radioButtonLayout.orientation = 'horizontal';
// radioButtonLayout.verticalAlignment = 'middle';
// radioButtonLayout.padding = 1;
// radioButtonLayout.marginBottom = 7;
// radioButtonLayout.width = '100%';
// const radioIndicator = new Label();
// radioIndicator.text = '';
// radioIndicator.width = 15;
// radioIndicator.height = 15;
// radioIndicator.borderRadius = 10;
// radioIndicator.borderWidth = 1;
// radioIndicator.borderColor = isSelected ? '#51abf1' : 'black';
// radioIndicator.backgroundColor = isSelected ? '#51abf1' : 'white';
// radioIndicator.marginRight = 10;
// const radioLabel = new Label();
// radioLabel.text = optionText;
// radioLabel.fontSize = 16;
// radioButtonLayout.addChild(radioIndicator);
// radioButtonLayout.addChild(radioLabel);
// radioButtonLayout.on(GestureTypes.tap, () => {
// 	const parentLayout = radioButtonLayout.parent as StackLayout;
// 	parentLayout.eachChild((child) => {
// 		if (child instanceof StackLayout) {
// 			const indicator = child.getChildAt(0) as Label;
// 			indicator.borderColor = 'black';
// 			indicator.backgroundColor = 'white';
// 		}
// 		return true;
// 	});
// 	radioIndicator.borderColor = '#51abf1';
// 	radioIndicator.backgroundColor = '#51abf1';
// 	this._payment = optionText;
// });
// radioButtonLayout.isEnabled = false; // Make non-editable
// return radioButtonLayout;
// }
//  }

// export class questionnaireAprv extends IControl {
//     private _descriptionLabels: Label[];
//     private _replyFields: Array<TextField | StackLayout>;
//     private _questionnaireIdFields: TextField[];
//     private _docId: string;
//     private _invitationId: string;
//     private _mainStackLayout: StackLayout;
//     private _itemTypes: string[];
//     private _payment: string;
//     private _doc: string;
//     private _vall: string;
//     private _dataLoaded: boolean = false;
//     private _userReplies = {};
//     private userReply;
//     private _clientAPI: any;

//     public constructor() {
//         super();
//         this._descriptionLabels = [];
//         this._replyFields = [];
//         this._questionnaireIdFields = [];
//         this._itemTypes = [];
//     }

//     public initialize(props) {
//         super.initialize(props);
//         const clientAPI = props.context?.clientAPI;
//         this._clientAPI = clientAPI;
//         if (clientAPI) {
//             this.fetchAndPopulateData(clientAPI); // Pass the clientAPI object
//         } else {
//             console.error('clientAPI is not available');
//         }
//     }

//     public view(): any {
//         if (!this._mainStackLayout) {
//             this._mainStackLayout = new StackLayout();
//             this._mainStackLayout.orientation = 'vertical';

//             const clientAPI = this.page()?.clientAPI;
//             if (clientAPI) {
//                 this.fetchAndPopulateData(clientAPI); // Pass the clientAPI object
//                 this._dataLoaded = true;
//             } else {
//                 console.error('clientAPI is not available');
//             }

//             let pageLayout = new StackLayout();
//             pageLayout.addChild(this._mainStackLayout);

//             return pageLayout;
//         }
//         return this._mainStackLayout;
//     }

//     private async fetchAndPopulateData(clientAPI): Promise<void> {
//         try {
//             this._docId = this.context.binding.doc_id;
//             this._invitationId = this.context.binding.invitationId;

//             const servicePath = "/quickbid/Services/capoff.service";
//             const entitySet1 = "Questionnaire_table";
//             const entitySet2 = "Questionnaire_reply_table";

//             const queryOption1 = `$filter=doc_id eq '${this._docId}' and invitationId eq '${this._invitationId}'`;
//             const queryOption2 = `$filter=doc_id eq '${this._docId}' and invitationId eq '${this._invitationId}'`;

//             const result1 = await clientAPI.read(servicePath, entitySet1, [], queryOption1);
//             const result2 = await clientAPI.read(servicePath, entitySet2, [], queryOption2);

//             if (result1 && result1.length && result2 && result2.length) {
//                 const repliesMap = result2.reduce((acc, reply) => {
//                     acc[reply.questionnaire_id] = reply.user_reply;
//                     return acc;
//                 }, {} as { [key: string]: string });

//                 result1.forEach((item, index) => {
//                     if (item && item.type !== "RQAATTACH") {
//                         const qusIdField = new TextField();
//                         qusIdField.hint = 'Questionnaire ID';
//                         qusIdField.text = item.questionnaire_id || 'No questionnaire ID';
//                         qusIdField.visibility = 'collapsed';
//                         qusIdField.isEnabled = false; // Make uneditable
//                         this._mainStackLayout.addChild(qusIdField);
//                         this._questionnaireIdFields.push(qusIdField);

//                         const descriptionLabel = new Label();
//                         descriptionLabel.fontSize = 18;
//                         descriptionLabel.horizontalAlignment = 'left';
//                         descriptionLabel.marginBottom = 10;
//                         descriptionLabel.marginTop = 30;
//                         descriptionLabel.text = item.description || 'No description available';
//                         this._mainStackLayout.addChild(descriptionLabel);
//                         this._descriptionLabels.push(descriptionLabel);

//                         this._itemTypes.push(item.type);

//                         if (item.type === 'RQASTRINGListOfChoices' || item.type === 'RQABOOLEAN') {
//                             const radioGroupLayout = new StackLayout();
//                             if (item.type === 'RQASTRINGListOfChoices') {
//                                 this.populateRadioOptions(item, radioGroupLayout, index, repliesMap, clientAPI);
//                             } else if (item.type === 'RQABOOLEAN') {
//                                 this.populateBooleanOptions(item, radioGroupLayout, index, repliesMap);
//                             }
//                             this._mainStackLayout.addChild(radioGroupLayout);
//                             this._replyFields.push(radioGroupLayout);
//                         } else if (item.type === "RQASTRING") {
//                             const replyField = new TextView();
//                             replyField.hint = `User Reply ${index + 1}`;
//                             replyField.text = repliesMap[item.questionnaire_id] || '';
//                             replyField.backgroundColor = 'white';
//                             replyField.color = '#000000';
//                             replyField.borderRadius = 5;
//                             replyField.borderWidth = 1;
//                             replyField.borderColor = '#000000';
//                             replyField.padding = 10;
//                             replyField.width = 288;
//                             replyField.horizontalAlignment = 'left';
//                             replyField.marginLeft = 7;
//                             replyField.marginRight = 7;
//                             replyField.isEditable = false; // Make uneditable
//                             this._mainStackLayout.addChild(replyField);
//                             this._replyFields.push(replyField);
//                         }

//                         // Retaining the tap gesture for toggling visibility of answers
//                         descriptionLabel.on(GestureTypes.tap, () => {
//                             const replyField = this._replyFields[index];
//                             if (replyField.visibility === 'collapse') {
//                                 replyField.visibility = 'visible';
//                                 descriptionLabel.text = `${item.description} ( Ans )`;
//                             } else {
//                                 replyField.visibility = 'collapse';
//                                 descriptionLabel.text = `${item.description} ( ans )`;
//                             }
//                         });
//                     }
//                 });
//             } else {
//                 throw new Error('No data found or invalid response');
//             }
//         } catch (error) {
//             console.error('Error fetching data from service:', error);
//             // alert(`Failed to fetch data: ${error.message}`);
//         }
//     }

//     private populateRadioOptions(item, radioGroupLayout: StackLayout, index: number, repliesMap: any, clientAPI): void {
//         const servicePath = "/quickbid/Services/capoff.service";
//         const entitySet = "Dropdown";
//         const queryOptions = `$filter=questionnaire_id eq '${item.questionnaire_id}'`;

//         clientAPI.read(servicePath, entitySet, [], queryOptions).then(response => {
//             if (response && response.length) {
//                 response.forEach((option, optionIndex) => {
//                     const isSelected = repliesMap[item.questionnaire_id] === option.dropdown_value;
//                     const radioButtonLayout = this.createDisabledRadioButton(option.dropdown_value, isSelected);
//                     radioGroupLayout.addChild(radioButtonLayout);
//                 });
//                 radioGroupLayout.visibility = 'visible';
//                 this._replyFields[index] = radioGroupLayout;
//             } else {
//                 throw new Error('Invalid radio options response format');
//             }
//         }).catch(error => {
//             console.error('Error fetching radio options:', error);
//             // alert(console.error);
//         });
//     }

//     private populateBooleanOptions(item, radioGroupLayout: StackLayout, index: number, repliesMap: any): void {
//         const yesRadioButton = this.createDisabledRadioButton('Yes', repliesMap[item.questionnaire_id] === 'Yes');
//         const noRadioButton = this.createDisabledRadioButton('No', repliesMap[item.questionnaire_id] === 'No');

//         radioGroupLayout.addChild(yesRadioButton);
//         radioGroupLayout.addChild(noRadioButton);
//     }

//     private createDisabledRadioButton(optionText: string, isSelected: boolean): StackLayout {
//         const radioButtonLayout = new StackLayout();
//         radioButtonLayout.orientation = 'horizontal';
//         radioButtonLayout.verticalAlignment = 'middle';
//         radioButtonLayout.padding = 1;
//         radioButtonLayout.marginBottom = 7;
//         radioButtonLayout.width = '100%';

//         const radioIndicator = new Label();
//         radioIndicator.text = '';
//         radioIndicator.width = 15;
//         radioIndicator.height = 15;
//         radioIndicator.borderRadius = 10;
//         radioIndicator.borderWidth = 1;
//         radioIndicator.borderColor = isSelected ? '#51abf1' : 'black';
//         radioIndicator.backgroundColor = isSelected ? '#51abf1' : 'white';
//         radioIndicator.marginRight = 10;

//         const radioLabel = new Label();
//         radioLabel.text = optionText;
//         radioLabel.fontSize = 16;

//         radioButtonLayout.addChild(radioIndicator);
//         radioButtonLayout.addChild(radioLabel);

//         return radioButtonLayout; // No tap event for radio button (disabled)
//     }
// }
export class questionnaireAprv extends IControl {
    private _descriptionLabels: Label[];
    private _replyFields: Array<TextField | StackLayout>;
    private _questionnaireIdFields: TextField[];
    private _docId: string;
    private _invitationId: string;
    private _mainStackLayout: StackLayout;
    private _itemTypes: string[];
    private _payment: string;
    private _doc: string;
    private _vall: string;
    private _dataLoaded: boolean = false;
    private _userReplies = {};
    private userReply;
    private _clientAPI: any;

    public constructor() {
        super();
        this._descriptionLabels = [];
        this._replyFields = [];
        this._questionnaireIdFields = [];
        this._itemTypes = [];
    }

    public initialize(props) {
        super.initialize(props);
        const clientAPI = props.context?.clientAPI;
        this._clientAPI = clientAPI;
        if (clientAPI) {
            this.fetchAndPopulateData(clientAPI); // Pass the clientAPI object
        } else {
            console.error('clientAPI is not available');
        }
    }

    public view(): any {
        if (!this._mainStackLayout) {
            this._mainStackLayout = new StackLayout();
            this._mainStackLayout.orientation = 'vertical';

            const clientAPI = this.page()?.clientAPI;
            if (clientAPI) {
                this.fetchAndPopulateData(clientAPI); // Pass the clientAPI object
                this._dataLoaded = true;
            } else {
                console.error('clientAPI is not available');
            }

            let pageLayout = new StackLayout();
            pageLayout.addChild(this._mainStackLayout);

            return pageLayout;
        }
        return this._mainStackLayout;
    }

    private async fetchAndPopulateData(clientAPI): Promise<void> {
        try {
            this._docId = this.context.binding.doc_id;
            this._invitationId = this.context.binding.invitationId;

            const servicePath = "/quickbid/Services/capoff.service";
            const entitySet1 = "Questionnaire_table";
            const entitySet2 = "Questionnaire_reply_table";

            const queryOption1 = `$filter=doc_id eq '${this._docId}' and invitationId eq '${this._invitationId}'`;
            const queryOption2 = `$filter=doc_id eq '${this._docId}' and invitationId eq '${this._invitationId}'`;

            const result1 = await clientAPI.read(servicePath, entitySet1, [], queryOption1);
            const result2 = await clientAPI.read(servicePath, entitySet2, [], queryOption2);

            if (result1 && result1.length && result2 && result2.length) {
                const repliesMap = result2.reduce((acc, reply) => {
                    acc[reply.questionnaire_id] = reply.user_reply;
                    return acc;
                }, {} as { [key: string]: string });

                result1.forEach((item, index) => {
                    if (item && item.type !== "RQAATTACH") {
                        const qusIdField = new TextField();
                        qusIdField.hint = 'Questionnaire ID';
                        qusIdField.text = item.questionnaire_id || 'No questionnaire ID';
                        qusIdField.visibility = 'collapsed';
                        qusIdField.isEnabled = false; // Make uneditable
                        this._mainStackLayout.addChild(qusIdField);
                        this._questionnaireIdFields.push(qusIdField);

                        const descriptionLabel = new Label();
                        descriptionLabel.fontSize = 18;
                        descriptionLabel.horizontalAlignment = 'left';
                        descriptionLabel.marginBottom = 10;
                        descriptionLabel.marginTop = 30;
                        descriptionLabel.text = item.description || 'No description available';
                        this._mainStackLayout.addChild(descriptionLabel);
                        this._descriptionLabels.push(descriptionLabel);

                        this._itemTypes.push(item.type);

                        if (item.type === 'RQASTRINGListOfChoices' || item.type === 'RQABOOLEAN') {
                            const radioGroupLayout = new StackLayout();
                            if (item.type === 'RQASTRINGListOfChoices') {
                                this.populateRadioOptions(item, radioGroupLayout, index, repliesMap, clientAPI);
                            } else if (item.type === 'RQABOOLEAN') {
                                this.populateBooleanOptions(item, radioGroupLayout, index, repliesMap);
                            }
                            this._mainStackLayout.addChild(radioGroupLayout);
                            this._replyFields.push(radioGroupLayout);
                        } else if (item.type === "RQASTRING") {
                            const replyField = new TextView();
                            replyField.hint = `User Reply ${index + 1}`;
                            replyField.text = repliesMap[item.questionnaire_id] || '';
                            replyField.backgroundColor = 'white';
                            replyField.color = '#000000';
                            replyField.borderRadius = 5;
                            replyField.borderWidth = 1;
                            replyField.borderColor = '#000000';
                            replyField.padding = 10;
                            replyField.width = 288;
                            replyField.horizontalAlignment = 'left';
                            replyField.marginLeft = 7;
                            replyField.marginRight = 7;
                            replyField.isEditable = false; // Make uneditable
                            this._mainStackLayout.addChild(replyField);
                            this._replyFields.push(replyField);
                        }

                        // Retaining the tap gesture for toggling visibility of answers
                        descriptionLabel.on(GestureTypes.tap, () => {
                            const replyField = this._replyFields[index];

                            // Safeguard: ensure replyField exists and has visibility property
                            if (replyField && 'visibility' in replyField) {
                                if (replyField.visibility === 'collapse') {
                                    replyField.visibility = 'visible';
                                    descriptionLabel.text = `${item.description} ( Ans )`;
                                } else {
                                    replyField.visibility = 'collapse';
                                    descriptionLabel.text = `${item.description} ( ans )`;
                                }
                            } else {
                                console.error(`replyField does not support visibility toggle at index ${index}`);
                            }
                        });
                    }
                });
            } else {
                throw new Error('No data found or invalid response');
            }
        } catch (error) {
            console.error('Error fetching data from service:', error);
            // alert(`Failed to fetch data: ${error.message}`);
        }
    }

    private populateRadioOptions(item, radioGroupLayout: StackLayout, index: number, repliesMap: any, clientAPI): void {
        const servicePath = "/quickbid/Services/capoff.service";
        const entitySet = "Dropdown";
        const queryOptions = `$filter=questionnaire_id eq '${item.questionnaire_id}'`;

        clientAPI.read(servicePath, entitySet, [], queryOptions).then(response => {
            if (response && response.length) {
                response.forEach((option, optionIndex) => {
                    const isSelected = repliesMap[item.questionnaire_id] === option.dropdown_value;
                    const radioButtonLayout = this.createDisabledRadioButton(option.dropdown_value, isSelected);
                    radioGroupLayout.addChild(radioButtonLayout);
                });
                radioGroupLayout.visibility = 'visible';
                this._replyFields[index] = radioGroupLayout;
            } else {
                throw new Error('Invalid radio options response format');
            }
        }).catch(error => {
            console.error('Error fetching radio options:', error);
            // alert(console.error);
        });
    }

    private populateBooleanOptions(item, radioGroupLayout: StackLayout, index: number, repliesMap: any): void {
        const yesRadioButton = this.createDisabledRadioButton('Yes', repliesMap[item.questionnaire_id] === 'Yes');
        const noRadioButton = this.createDisabledRadioButton('No', repliesMap[item.questionnaire_id] === 'No');

        radioGroupLayout.addChild(yesRadioButton);
        radioGroupLayout.addChild(noRadioButton);
    }

    private createDisabledRadioButton(optionText: string, isSelected: boolean): StackLayout {
        const radioButtonLayout = new StackLayout();
        radioButtonLayout.orientation = 'horizontal';
        radioButtonLayout.verticalAlignment = 'middle';
        radioButtonLayout.padding = 1;
        radioButtonLayout.marginBottom = 7;
        radioButtonLayout.width = '100%';

        const radioIndicator = new Label();
        radioIndicator.text = '';
        radioIndicator.width = 15;
        radioIndicator.height = 15;
        radioIndicator.borderRadius = 10;
        radioIndicator.borderWidth = 1;
        radioIndicator.borderColor = isSelected ? '#51abf1' : 'black';
        radioIndicator.backgroundColor = isSelected ? '#51abf1' : 'white';
        radioIndicator.marginRight = 10;

        const radioLabel = new Label();
        radioLabel.text = optionText;
        radioLabel.fontSize = 16;

        radioButtonLayout.addChild(radioIndicator);
        radioButtonLayout.addChild(radioLabel);

        return radioButtonLayout; // No tap event for radio button (disabled)
    }
}


