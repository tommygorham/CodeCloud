import { TileBody } from "../Tile/tile.js";
import {
  PullToRefresh,
  PullDownContent,
  ReleaseContent,
  RefreshContent
} from "react-js-pull-to-refresh";
<div id = "centered">
       
          <PullToRefresh
            pullDownContent={<PullDownContent />}
            releaseContent={<ReleaseContent />}
            refreshContent={<RefreshContent />}
            pullDownThreshold={2}
            onRefresh={this.handleRefresh}
            triggerHeight={50}
            backgroundColor="opaque"
          >
            <div>
              {[...this.state.users].map((user, index) => {
                const name = `${user.name}`;
                const handle = `${user.login}`;
                const image = `${user.image}`;
                const content = `${user.content}`;
                console.log(user.avatarURL);
                console.log(image);
                return (
                  <TileBody
                    key={index}
                    name={name}
                    handle={handle}
                    content={content}
                    image={image}
                  />
                );
              })}
              </div>
            

            <div>
              <img
                src={this.users == null ? "" : this.users[0].avatarURL}
                alt="a sexy man"
              />
            </div>
          </PullToRefresh>