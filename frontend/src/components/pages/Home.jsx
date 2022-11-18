import { Modal, TextField } from "../common";

export const Home = () => {    
     return (
        <>
        <div className = "pageStyle" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <div className = "coolTitle">
                <div className="perspective-text">
                    <div className="perspective-line">
                        <p></p>
                        <p>Enter</p>
                    </div>

                    <div className="perspective-line">
                        <p>Reality</p>
                        <p>Here</p>
                    </div>
                    <div className="perspective-line">
                        <p>Is Only</p>
                        <p>To</p>
                    </div>
                    <div className="perspective-line">
                        <p>A Matter Of</p>
                        <p>Join...</p>
                    </div>
                    <div className="perspective-line">
                        <p>Perception</p>
                        <p></p>
                    </div>
                </div>    
            </div>

            <div className = "homeImage">
            </div>
        </div>

        <Modal page = {"home"}/>
        </>
     )
}