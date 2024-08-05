import React from "react";
import { createRoot } from 'react-dom/client';
import { ActionButton, Button, ButtonGroup, Content, Dialog, Divider, Header, Heading, Text, Provider, defaultTheme } from '@adobe/react-spectrum';
import { showAlert } from "./App";

export default function ShowModal() {
    let dialogElement = null;

    const handleConfirm = async () => {
        await showAlert({ title: "Speed Test", message: "Speed test started!" });
    };

    const openDialog = async () => {
        if (!dialogElement) {
            dialogElement = document.createElement("dialog");
            createRoot(dialogElement).render(
                <Provider colorScheme="dark" theme={defaultTheme}>
                    <Dialog>
                        <sp-heading>Isso aqui é uma modal</sp-heading>
                        <sp-divider></sp-divider>
                        <Content>
                            <sp-body>aaa</sp-body>
                        </Content>
                        <ButtonGroup >
                            <sp-button>aaa</sp-button>
                        </ButtonGroup>
                    </Dialog>
                </Provider>
            );
        }
        document.body.appendChild(dialogElement);
        dialogElement.showModal();
        dialogElement.remove();
    };

    return (
        <ActionButton onClick={openDialog}>Check connectivity</ActionButton>
    );
}