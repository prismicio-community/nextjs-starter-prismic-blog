import NextImage from "next/image";
import * as prismicH from "@prismicio/helpers";
import { PrismicLink, PrismicText } from "@prismicio/react";

import { Bounded } from "./Bounded";

const Profile = ({ name, description, profilePicture }) => {
  return (
    <div className="grid max-w-lg grid-cols-1 justify-items-center gap-8">
      <PrismicLink href="/">
        <div className="relative h-40 w-40 overflow-hidden rounded-full bg-gray-300">
          {prismicH.isFilled.image(profilePicture) && (
            <NextImage
              src={prismicH.asImageSrc(profilePicture, {
                w: undefined,
                h: undefined,
              })}
              alt={profilePicture.alt}
              layout="fill"
              className="object-cover"
            />
          )}
        </div>
      </PrismicLink>
      {(prismicH.isFilled.richText(name) ||
        prismicH.isFilled.richText(description)) && (
        <div className="grid grid-cols-1 gap-2 text-center">
          {prismicH.isFilled.richText(name) && (
            <h1 className="text-3xl font-semibold tracking-tighter text-gray-800 md:text-4xl">
              <PrismicLink href="/">
                <PrismicText field={name} />
              </PrismicLink>
            </h1>
          )}
          {prismicH.isFilled.richText(description) && (
            <p className="font-serif text-2xl italic leading-normal tracking-tight text-gray-500">
              <PrismicText field={description} />
            </p>
          )}
        </div>
      )}
    </div>
  );
};

const NavItem = ({ children }) => {
  return (
    <li className="font-semibold tracking-tight text-gray-800">{children}</li>
  );
};

export const Header = ({ withProfile = true, navigation, settings }) => {
  return (
    <Bounded as="header">
      <div className="grid grid-cols-1 justify-items-center gap-20">
        <nav>
          <ul className="flex flex-wrap justify-center gap-10">
            <NavItem>
              <PrismicLink href="/">
                <PrismicText field={navigation.data.homepageLabel} />
              </PrismicLink>
            </NavItem>
            {navigation.data?.links.map((item) => (
              <NavItem key={prismicH.asText(item.label)}>
                <PrismicLink field={item.link}>
                  <PrismicText field={item.label} />
                </PrismicLink>
              </NavItem>
            ))}
          </ul>
        </nav>
        {withProfile && (
          <>
            <Profile
              name={settings.data.name}
              description={settings.data.description}
              profilePicture={settings.data.profilePicture}
            />
            <hr className="h-px w-full max-w-sm border-0 bg-gray-200" />
          </>
        )}
      </div>
    </Bounded>
  );
};
