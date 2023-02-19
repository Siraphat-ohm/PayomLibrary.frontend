import { Card, Image, Text, Group, Badge, createStyles, Center, Button } from '@mantine/core';
import { IconBallpen, IconPaperBag } from '@tabler/icons-react';
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
    ISBN: string,
    quantity: string,
    category: string,
    img: string,
    author: string
}

interface CardBookProps {
    data: book
}

export function CardBook({ data } : CardBookProps) {
    const { addToCart } = useCart();
    const navigate = useNavigate();
    
    const mockdata = [
        { label: data.author, icon: IconBallpen },
        { label: data.quantity, icon: IconPaperBag },
    ];

    const { classes } = useStyles();
    const features = mockdata.map((feature) => (
        <Center key={feature.label}>
        <feature.icon size={18} className={classes.icon} stroke={1.5} />
        <Text size="xs">{feature.label}</Text>
        </Center>
    ));

    const handleView = (id: string) => {
        return navigate(`/main/book/${id}`);
    }
    

    return (
        <Card withBorder radius="md" className={classes.card}>
            <div style={{ height: "300px", overflow:'hidden'}}>
                <img src={data.img} width={258}/>
            </div>

            <Group position="left" mt="md">
                <div>
                <Text weight={500}>{data.title.length > 33 ? data.title.slice(0, 30) + "..." : data.title }</Text>
                <Text size="xs" color="dimmed">
                    ISBN: {data.ISBN}
                </Text>
                <Badge variant="outline">{data.category}</Badge>
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
                <Button radius="md" size="md" onClick={() => addToCart(data)}>
                    add to cart
                </Button>
                <Button radius="md" size="md" variant="outline" color="gray" onClick={() => handleView(data.id)}>
                    view
                </Button>
                </Group>
            </Card.Section>
        </Card>
    );
}