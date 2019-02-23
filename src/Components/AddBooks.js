import React, {Component} from 'react'
import axios from 'axios'

class AddBooks extends Component {

    state = {
        file: null
    }
    fileChanged = (e) => {
        this.setState({
            file: e.target.files[0]
        })
    }


    uploadFile = (e) => {
        const fd = new FormData();
        fd.append('image', this.state.file, this.state.file.name)
        axios.post('https://us-central1-papyrus-11cc8.cloudfunctions.net/fileUploaded',fd).then((res) => {
            console.log(res);
        })
    }

    render() {
    return(
        <div className="container">
           <div className="card">
               <span className="card-title">Sell Your Book!</span>
               <div className="card-content">
                   <form >
                       <div className="input-field">
                           <input type="text" id="title"/>
                           <label htmlFor="title">Book Title</label>
                       </div>
                       <div className="input-field">
                           <input type="text" id="author"/>
                           <label htmlFor="author">Author</label>
                       </div>
                       <div className="input-field">
                           <input type="number" id="price"/>
                           <label htmlFor="price">Price</label>
                       </div>
                       <div className="input-field">
                           <input type="file" id="file" name="img" onChange = {this.fileChanged}/>
                           <label htmlFor="file">Upload a photo of your book.</label>
                       </div>
                       <div className="card-action">
                           <a className="btn brown darken-4" onClick = {this.uploadFile}>Submit!</a>
                       </div>
                   </form>
               </div>
           </div>
        </div>
    )
}
}

export default AddBooks;