interface Props {
    text: string;
    fill: boolean;
}

const Button = ({text, fill}: Props) => {
    return (
        <button className={`button ${fill ? 'button_fill' : ''}`}>
            {text}
        </button>
    );
};

export default Button;
