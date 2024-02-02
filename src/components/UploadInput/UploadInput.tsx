import styled, { css } from 'styled-components';

interface UploadInputProps {
    isNightMode: boolean;
    type: string;
    id: string;
    name: string;
}

const UploadInputStyled = styled.input<UploadInputProps>`
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
        background-color: #444;
        color: #fff;
        border-color: #666;
    `}
`;

const UploadInput = ({
    isNightMode,
    type,
    id,
    name,
}: UploadInputProps) => {
    return (
        <UploadInputStyled
            type={type}
            id={id}
            name={name}
            isNightMode={isNightMode}
        />
    );
};

export default UploadInput;