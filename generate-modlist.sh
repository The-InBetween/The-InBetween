mkdir -p tmp/{server,client}
cd client
packwiz modrinth export -o The-InBetween-Client.mrpack
cd ../tmp/client
mcman init --mrpack ../../client/The-InBetween-Client.mrpack --name The-InBetween-Client
mcman markdown
cat README.md > ../../CLIENT.md
cd ../../server
packwiz modrinth export -o The-InBetween-Server.mrpack
cd ../tmp/server
mcman init --mrpack ../../server/The-InBetween-Server.mrpack --name The-InBetween-Server
mcman markdown
cat README.md > ../../SERVER.md
cd ../..
rm -rf tmp
