import {ActionIcon, Box, Flex, Text} from "@mantine/core";
import {MdOutlineEdit} from "react-icons/md";
import {useDisclosure, useMediaQuery} from "@mantine/hooks";
import styles from '@/styles/chat/UserMessage.module.css';
import DisplayName from "@/components/common/DisplayName";

const UserMessage = ({ message='', alignLeft, displayName, date }) => {
  const mobile = useMediaQuery('48em');
  const [editVisible, { open: showEdit, close: hideEdit }] = useDisclosure(false);

  return (
    <Flex
      direction={'column'}
      gap={4}
      align={alignLeft ? 'flex-start' : 'flex-end'}
    >
      <Flex
        gap={8}
        align={'center'}
        direction={alignLeft ? 'row' : 'row-reverse'}
        onMouseEnter={!mobile ? showEdit : undefined}
        onMouseLeave={!mobile ? hideEdit : undefined}
        onFocus={mobile ? showEdit : undefined}
        onBlur={mobile ? hideEdit : undefined}
      >
        <Flex className={styles.message}>
          <Text>
            { message }
          </Text>
        </Flex>

        <Box miw={34}>
          {
            editVisible &&
            <ActionIcon
              size={'lg'}
              color={'gray'}
              variant={'subtle'}
              aria-label={'Edit Message'}
              onClick={(e) => {
                e.preventDefault();
                console.log('Edit message!')
              }}
            >
              <MdOutlineEdit size={20} />
            </ActionIcon>
          }
        </Box>
      </Flex>

      <DisplayName
        name={displayName}
        date={date}
        direction={ alignLeft ? 'row' : 'row-reverse'}
      />
    </Flex>
  );
};

export default UserMessage;