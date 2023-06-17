import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Heading,
} from '@chakra-ui/react';
import { SmallAddIcon } from '@chakra-ui/icons';

export const AddContactModal = ({
  children,
  onClose,
  isOpen,
  onOpen,
}) => {
  return (
    <>
      <Heading as="h3" mb="3">
        Your contacts
      </Heading>
      <Button
        colorScheme="teal"
        onClick={onOpen}
        mb="4"
        maxW="160"
      >
        <SmallAddIcon mr="2" color="white" boxSize={7} />
        Add contact
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          bg={theme => theme.colors.light}
          borderRadius="3xl"
          p="8"
        >
          <ModalHeader textAlign="center">
            Add contact
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
