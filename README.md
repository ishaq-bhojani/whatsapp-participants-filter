# Whatsapp Participants Filter
Only Keeps list of user in the groups, all others are kicked out.

## Steps to run
1. Clone the repo
2. inside the repo root run `npm install`
3. Add numbers in the particapants.json file in this format `923456789012`
4. Go to package.json file and replace `GROUP_NAME=MyGroup` with `GROUP_NAME=${Your_Group_Name}`
4. Run npm Start 
5. Scan the QR code from your Whatsapp

### After running these only participants who are admin and in particapants.json file will remain in group and all others will be removed.
