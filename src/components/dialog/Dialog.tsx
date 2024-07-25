import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
} from '@chakra-ui/react'
import styled from 'styled-components'

interface DialogProps {
  children: JSX.Element[] | JSX.Element
  isOpen: boolean
  onClose: () => void
  onSubmit: () => void
  isLoading?: boolean
  disabled?: boolean
  title?: string
  closeButtonText?: string
  secondaryAction?: string
}

const Dialog = ({
  children,
  isOpen,
  onClose,
  onSubmit,
  isLoading,
  disabled,
  title,
  closeButtonText,
  secondaryAction,
}: DialogProps) => {
  return (
    <>
      <Modal
        isCentered
        closeOnOverlayClick={true}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />

        <ModalContent>
          {isLoading && (
            <LoaderContainer>
              <Spinner color="green.600" />
            </LoaderContainer>
          )}

          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" variant="ghost" mr={3} onClick={onClose}>
              {closeButtonText}
            </Button>
            <Button
              colorScheme="green"
              isDisabled={disabled}
              onClick={onSubmit}
            >
              {secondaryAction}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Dialog

const LoaderContainer = styled(Box)`
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 2;
  width: 100%;
  height: 100%;
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;
`
