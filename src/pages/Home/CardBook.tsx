import { Card, Image, Text, Group, Badge, createStyles, Center, Button, Modal } from '@mantine/core';
import { IconBallpen, IconPaperBag, IconX } from '@tabler/icons-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const useStyles = createStyles((theme) => ({
    card: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7]: theme.white,
        width: "300px",
        marginRight: "20px",
        marginBottom: "20px"
    },

    imageSection: {
    padding: theme.spacing.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: "auto",
    marginRight: "auto",
    borderBottom: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    width:"300px",
    height:"300px",
    overflow:"hidden"
    },

    label: {
        marginBottom: theme.spacing.xs,
        lineHeight: 1,
        fontWeight: 700,
        fontSize: theme.fontSizes.xs,
        letterSpacing: -0.25,
        textTransform: 'uppercase',
    },

    section: {
        padding: theme.spacing.md,
        borderTop: `1px solid ${
            theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
        }`,
    },

    icon: {
        marginRight: 5,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[5],
    },  }));


interface book {
    id: string,
    title: string,
    description: string,
    authors: string[],
    categories: string[],
    language: string[],
    ISBN: string,
    pubYear: number,
    page: number,
    copies: number,
    thumbnail: string
}

interface CardBookProps {
    data: book,
}

export function CardBook({ data } : CardBookProps) {
    
    const { addToCart } = useCart();
    const navigate = useNavigate();
    const [opened, setOpen] = useState(false);

    const mockdata = [
        { label: data.authors, icon: IconBallpen },
        { label: data.copies, icon: IconPaperBag },
    ];

    const { classes } = useStyles();
    const features = mockdata.map((feature, index) => (
        <Center key={index}>
        <feature.icon size={18} className={classes.icon} stroke={1.5} />
        <Text size="xs">{feature.label}</Text>
        </Center>
    ));

    return (
        <>
        <Card withBorder radius="md" className={classes.card} onClick={() => setOpen(true)}>
            <div style={{ height: "300px", overflow:'hidden'}}>
                <img src={data.thumbnail} width={258}/>
            </div>

            <Group position="left" mt="md">
                <div>
                <Text weight={500}>{data.title.length > 33 ? data.title.slice(0, 30) + "..." : data.title }</Text>
                <Text size="xs" color="dimmed">
                    ISBN: {data.ISBN}
                </Text>
                <Badge variant="outline">{data.categories}</Badge>
                </div>
            </Group>

            <Card.Section className={classes.section} mt="md">
                <Text size="sm" color="dimmed" className={classes.label}>
                    detail
                </Text>
                <Group spacing={8} mb={-8}>
                {features}
                </Group>
            </Card.Section>

            <Card.Section className={classes.section}>
                <Group spacing={30}>
                <Button radius="md" size="md" onClick={() => addToCart({ id: data.id, title: data.title, ISBN: data.ISBN, quantity: 1, category: "t" })}>
                    add to cart
                </Button>
                <Button radius="md" size="md" variant="outline" color="gray" >
                    view
                </Button>
                </Group>
            </Card.Section>
        </Card>
        <Modal 
            opened={opened}
            onClose={() => setOpen(false)}
            size="xl"
        >
        <div className="overlay">
            <div className="overlay-inner">
                <div className="inner-box">
                    <img src={data?.thumbnail}/>
                    <div className="info">
                        <h1>{data.title}</h1>
                        <p>ISBN: {data.ISBN}</p>
                        <p>category: {data.categories}</p>
                        <p>language: {data.language}</p>
                        <p>publication year: {data.pubYear}</p>
                        <p>page: {data.page}</p>
                        <p>amount: {data.copies}</p>
                    </div>
                </div>
                <h4 className='description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, aliquid neque. Eligendi quos atque, natus ratione velit voluptatum sequi rem facilis dolores sint quod quisquam veniam modi assumenda officia odit non quasi, odio laborum inventore vitae repellendus. Repudiandae, hic dicta?</h4>
            </div>
        </div>
        </Modal>
        </>
    );
}