mkdir -p tmp/{server,client}
cd client
packwiz modrinth export -o The-InBetween-Client.mrpack
cd ../tmp/client
rustup run stable mcman init --mrpack ../../client/The-InBetween-Client.mrpack --name The-InBetween-Client
rustup run stable mcman markdown
cat README.md > ../../CLIENT.md
cd ../../server
packwiz modrinth export -o The-InBetween-Server.mrpack
cd ../tmp/server
rustup run stable mcman init --mrpack ../../server/The-InBetween-Server.mrpack --name The-InBetween-Server
rustup run stable mcman markdown
cat README.md > ../../SERVER.md
cd ../..
rm -rf tmp
