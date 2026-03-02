import { Alert } from "@heroui/react";
export const ErrorModal = ({content}:{content:string}) => {
    return (
        <>
      <Alert status="danger">
        <Alert.Indicator />
        <Alert.Content>
          <Alert.Title>Unable to connect to server</Alert.Title>
          <Alert.Description>
           {content}
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm">
              <li>Check your internet connection</li>
              <li>Refresh the page</li>
              <li>Clear your browser cache</li>
            </ul>
          </Alert.Description>
        </Alert.Content>
      </Alert>        
        </>
    )
}