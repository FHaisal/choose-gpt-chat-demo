import {Avatar, Flex, Text} from "@mantine/core";
import styles from "@/styles/chat/AIMessage.module.css";
import DisplayName from "@/components/common/DisplayName";

const AIMessage = ({ message, displayName, date, avatarProps }) => {
  return (
    <Flex
      gap={8}
    >
      <Avatar
        radius={'xl'}
        {...avatarProps}
      />

      <Flex
        direction={'column'}
      >
        <DisplayName
          name={displayName}
          date={date}
        />

        <Text className={styles.message}>
          { message }
        </Text>
      </Flex>
    </Flex>
  )
};

export default AIMessage;