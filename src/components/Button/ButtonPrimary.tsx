import styled, { css } from 'styled-components';

interface ButtonProps {
    type: 'button' | 'submit' | 'reset';
    labelText: string;
    isNightMode: boolean;
    additionalStyle?: string;
    onClick?: () => void;
}

const StyledButton = styled.button<ButtonProps>`
    padding: 10px;
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
    font-size: 16px;
    cursor: pointer;

    ${(props) =>
        props.isNightMode &&
        css`
        background-color: #ffffff;
        color: #000000;
        border-color: #666;
    `}

    ${(props) => props.additionalStyle && props.additionalStyle};
`;

const ButtonPrimary = ({ type, labelText, isNightMode, additionalStyle, onClick }: ButtonProps) => {
    return (
        <StyledButton 
            type={type} 
            isNightMode={isNightMode} 
            additionalStyle={additionalStyle}
            onClick={onClick}
        >
            {labelText}
        </StyledButton>
    );
};

export default ButtonPrimary;