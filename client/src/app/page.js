import Advantages from "@/widgets/Advantages/Advantages";
import Brands from "@/widgets/Brands/Brands";
import Contacts from "@/widgets/Contacts/Contacts";
import Head from "@/widgets/Head/Head";
import Motivation from "@/widgets/Motivation/Motivation";
import Reviews from "@/widgets/Reviews/Reviews";
import Tarifs from "@/widgets/Tarifs/Tarifs";
import WhoWe from "@/widgets/WhoWe/WhoWe";
import Zifrs from "@/widgets/Zifrs/Zifrs";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <Head />
      <Brands />
      <WhoWe />
      <Motivation />
      <Advantages />
      <Zifrs />
      <Tarifs />
      <Reviews />
      <Contacts />
    </React.Fragment>
  );
}
