import "./ContactFormStyles.css";

function Message(){
    return(
        <div className="form-container">
            <h1>Let's discuss your project</h1>
            <form>
                <input placeholder="Name"/>
                <input placeholder="Email"/>
                <input placeholder="Phone nuumber"/>
                <textarea placeholder="Message" rows="4"/>
                <button>SUBMIT</button>
            </form>
        </div>
    )
}
export default Message;