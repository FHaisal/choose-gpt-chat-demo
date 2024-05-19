'use client';

import Layout from "@/components/ui/Layout";
import styles from '@/styles/chat/Chat.module.css';
import {ActionIcon, Container, Flex, Textarea, Text, Badge, Box} from "@mantine/core";
import {IoArrowUpCircle} from "react-icons/io5";
import {MdOutlineEdit} from "react-icons/md";
import UserMessage from "@/components/ui/Chat/UserMessage";
import AIMessage from "@/components/ui/Chat/AIMessage";

export default function Page() {


  return (
    <Layout
      footer={(
        <Container size={768} px={0} w={'100%'}>
          <Flex className={styles.messageBox}>
            <Textarea
              variant={'filled'}
              placeholder="Message..."
              autosize
              minRows={0}
              maxRows={4}
              size={'md'}
              rightSection={(
                <ActionIcon variant={'transparent'} aria-label={'Send Message'}>
                  <IoArrowUpCircle size={32} />
                </ActionIcon>
              )}
            />
          </Flex>
        </Container>
      )}
    >
      <Container size={768} p={0} w={'100%'} style={{ display: 'flex', direction: 'column' }}>
        <Flex className={styles.chat}>

          <UserMessage
            message={'Hello World!'}
            displayName={'Faisal Hoque'}
            date={'18/05/2024 11:32 PM'}

          />

          <AIMessage
            message={'Here is a simple Python code to implement the FizzBuzz algorithm:\n\n```\nfor i in range(1, 101):\n    if i % 3 == 0 and i % 5 == 0:\n        print("FizzBuzz")\n    elif i % 3 == 0:\n        print("Fizz")\n    elif i % 5 == 0:\n        print("Buzz")\n    else:\n        print(i)\n```\n\nThis code will print out the numbers from 1 to 100, replacing multiples of 3 with "Fizz", multiples of 5 with "Buzz", and multiples of both with "FizzBuzz".'}
            displayName={'Cat GPT'}
            date={'19/05/2024 12:31 AM'}
          />
        </Flex>
      </Container>
    </Layout>
  );
}
