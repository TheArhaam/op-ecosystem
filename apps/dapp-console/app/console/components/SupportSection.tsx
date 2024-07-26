'use client'

import { Tile } from '@/app/components/Tile/Tile'
import { getDocsItems, externalRoutes } from '@/app/constants'
import { trackCardClick } from '@/app/event-tracking/mixpanel'
import { openWindow } from '@/app/helpers'
import { useFeatureFlag } from '@/app/hooks/useFeatureFlag'
import { FarcasterIcon } from '@/app/icons/FarcasterIcon'
import { Button } from '@eth-optimism/ui-components/src/components/ui/button/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from '@eth-optimism/ui-components/src/components/ui/dialog/dialog'
import { Text } from '@eth-optimism/ui-components/src/components/ui/text/text'
import { RiDiscordFill, RiGitForkFill, RiGithubFill } from '@remixicon/react'
import Image from 'next/image'

const SupportSection = () => {
  const showNewLogo = useFeatureFlag('enable_new_brand')
  const docsItems = getDocsItems(showNewLogo)

  return (
    <div>
      <Text as="h3" className="text-2xl font-semibold mb-4">
        Support
      </Text>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <Tile
          title="Github Developer Forum"
          description="Get all of your development questions answered by Superchain experts."
          onClick={() => {
            trackCardClick('Github Developer Forum')
            openWindow(externalRoutes.DEV_FORUM.path)
          }}
          variant="secondary"
          icon={<RiGithubFill size={24} />}
          className="xl:h-auto min-h-[125px]"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-[125px]">
          <Tile
            title="Farcaster"
            description="Join the /op-stack channel."
            onClick={() => {
              trackCardClick('Farcaster')
              openWindow(externalRoutes.FARCASTER.path)
            }}
            variant="secondary"
            icon={<FarcasterIcon size={24} />}
          />
          <Tile
            title="App examples"
            onClick={() => {
              trackCardClick('App examples')
              openWindow(externalRoutes.DAPP_EXAMPLES.path)
            }}
            variant="secondary"
            icon={<RiGitForkFill size={24} />}
          />
          <Tile
            title="Discord"
            onClick={() => {
              trackCardClick('Discord')
              openWindow(externalRoutes.DISCORD.path)
            }}
            variant="secondary"
            icon={<RiDiscordFill size={24} />}
          />
          <Dialog>
            <DialogTrigger asChild>
              <Tile
                title="Docs"
                onClick={() => {
                  trackCardClick('Docs')
                }}
                variant="secondary"
                icon={<RiGitForkFill size={24} />}
              />
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <Text as="span" className="text-lg font-semibold">
                  Go to docs
                </Text>
              </DialogHeader>
              <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                {docsItems.map((item) => (
                  <Button
                    asChild
                    key={item.path}
                    variant="secondary"
                    className="justify-start py-8"
                  >
                    <a
                      href={item.path}
                      target="_blank"
                      className="flex items-center gap-4 text-base"
                    >
                      <Image
                        src={item.logo}
                        alt={`${item.label} logo`}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <Text as="span" className="text-base font-semibold">
                        {item.label}
                      </Text>
                    </a>
                  </Button>
                ))}
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  )
}

export { SupportSection }
