import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";

import { Game } from "../hooks/useGames";
import getCroppedImageUrl from "../services/image-url";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import PlatformIconList from "./PlatformIconList";
import { useState } from "react";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const [display, setDisplay] = useState(true);
  console.log(game);
  return (
    <Card className="Card">
      <Image
        src={getCroppedImageUrl(game.background_image)}
        className="image"
      />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms?.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl" className="card-title">
          {game.name}
          <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
      <Text className="text" display={"none"}>
        Release date:
      </Text>
      <Text className="text" display={"none"}>
        Genres:
      </Text>
      <Text className="text" display={"none"}>
        Chart:
      </Text>
    </Card>
  );
};

export default GameCard;
