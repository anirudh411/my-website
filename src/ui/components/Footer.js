import styled from "styled-components";
import React from "react"
import Input from "../elements/form";
import {github, index} from "../icons";
import {motion} from "framer-motion";

const FooterStyled = styled.footer`
  padding: 2rem 0;
  margin-top:3rem;
  min-height: 25vh;
  background-image:  linear-gradient(90deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),  linear-gradient(90deg, ${props => props.theme.palette.primary.main}, ${props => props.theme.palette.primary.light});
 
`
const Box = styled.div`
        background:${props => props.background ? props.theme.palette[props.background]['main'] : 'transparent'};
        border-radius:.4rem;
`

const Button = styled.button`
        color:${props => props.color ? props.theme.text[props.color] || props.theme.text.default : props.theme.text.primary};
        background-color:${props => props.color ? props.theme.palette[props.color]['main'] || props.theme.palette.primary.main : props.theme.palette.primary.main};
        box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
        padding:0.2rem 1rem;
        min-width: 4rem;
        border-radius:.5rem;
        border:0;
        display: inline-flex;
        outline:0;
        justify-content:center;
        vertical-align:middle;
        transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        
        :disabled{ cursor: default;
                    pointer-events:none;
                    color: rgba(255, 255, 255, 0.3);
                    box-shadow: none;
                    background-color: rgba(255, 255, 255, 0.12);
        }
        :hover {
            background-color:${props => props.color ? props.theme.palette[props.color]['dark'] || props.theme.palette.primary.dark : props.theme.palette.primary.dark}
        }
        :active {
            box-shadow: 0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12);
        }
        :focus {
            outline:0;
        }
`;

export default function Footer() {

    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');
    const [isSuccess, setIsSuccess] = React.useState(false);

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }
    React.useEffect(() => {
        if (isSuccess) {
            setEmail('');
            setMessage('');

        }
    }, [isSuccess]);

    const handleSubmit = e => {
        fetch("/", {
            method: "POST",
            headers: {"Content-Type": "application/x-www-form-urlencoded"},
            body: encode({"form-name": "contact", ...{email, message}})
        })
            .then(() => setIsSuccess(true))
            .catch(error => alert(error));

        e.preventDefault();
    };

    return (
        <FooterStyled>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4">
                        <Box onSubmit={handleSubmit} as="form" name="contact" method="post" background='primary'
                             className="p-3"
                             style={{marginTop: -70}}>
                            <input type="hidden" name="form-name" value="contact"/>
                            <div className="col-sm-12  my-3">
                                <h3 className="text-center" style={{textAlign: 'center'}}>Get in touch</h3>
                            </div>
                            <div className="col-sm-12">
                                <Input
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                    type="email" name="email" className="form-control"
                                    aria-describedby="emailHelp" placeholder="Email"/>
                            </div>
                            <div className="col-sm-12">
                                <Input value={message}
                                       onChange={(event) => setMessage(event.target.value)}
                                       placeholder="message" name='message' as={'textarea'}/>
                            </div>
                            <div className="col-12">
                                <Button disabled={!email || !message} type="submit" color="secondary"> Send</Button>
                                {isSuccess &&
                                <div className="mt-2">
                                    <motion.div initial={{opacity: 0}} animate={{opacity: 1}}>Great. I will be in touch
                                        soon
                                    </motion.div>
                                </div>
                                }
                            </div>
                        </Box>
                    </div>
                    <div
                        className="col-12 mt-4 mt-md-0 col-md-6 col-lg-8 d-flex justify-content-md-end justify-content-start">
                        <a className="ml-3 my-auto" href="https://twitter.com/_anirudh___" target="_blank"
                           rel="noopener noreferrer">
                            {index}
                        </a>
                        <a className="ml-3 my-auto text-white" href="https://github.com/anirudh411" target="_blank"
                           rel="noopener noreferrer">
                            {github}
                        </a>
                    </div>
                </div>
            </div>
        </FooterStyled>
    )
}




