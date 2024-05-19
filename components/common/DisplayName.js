import {Flex, Text} from "@mantine/core";
import styles from "@/styles/common/DisplayName.module.css";

const DisplayName = ({ name, date, ...others }) => {
  return (
    <>
      {
        (name || date) &&
        <Flex
          direction={'row'}
          gap={8}
          align={'center'}
          {...others}
        >
          {
            name &&
            <Text
              className={styles.name}
            >
              { name }
            </Text>
          }

          {
            date &&
            <Text
              size={'xs'}
              c={'dimmed'}
            >
              { date }
            </Text>
          }
        </Flex>
      }
    </>
  );
};

export default DisplayName;