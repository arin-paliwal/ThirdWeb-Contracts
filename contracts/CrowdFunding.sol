// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract CrowdFunding {
    struct Campaign {
        address owner;
        string title;
        string description;
        uint256 target;
        uint256 deadline;
        uint256 ammountCollected;
        string image;
        address[] donators;
        uint256[] donations;
    }
    mapping(uint256 => Campaign) public campaigns; // creating a dictionary for Campaign
    uint256 public numberOfCampaigns = 0;

    function createCampaign(
        address _owner,
        string memory _title,
        string memory _description,
        uint256 _target,
        uint _deadline,
        string memory _image
    ) public returns (uint256) {
        Campaign storage campaign = campaigns[numberOfCampaigns];
        require(
            campaign.deadline < block.timestamp,
            "The Deadline should be date in future"
        );
        campaign.owner = _owner;
        campaign.title = _title;
        campaign.description = _description;
        campaign.target = _target;
        campaign.deadline = _deadline;
        campaign.ammountCollected = 0;
        campaign.image = _image;
        numberOfCampaigns++;
        return numberOfCampaigns - 1;
    }
    // payable - keyword to tell that via this function we will payout
    function donateToCampaign(uint256 _id) public payable {
        uint256 amount=msg.value;
        Campaign storage campaign=campaigns[_id];
        campaign.donations.push(amount);
        campaign.donators.push(msg.sender);
        (bool sent,)=payable(campaign.owner).call{value:amount}(""); // comma for one more param can come
        if(sent){
            campaign.ammountCollected=campaign.ammountCollected+amount
        }
    }

    function getDonators(uint256 _id) view public return(address[] memory,uint256[] memory) {
        return (campaigns[_id].donators,campaigns[_id].donations);
    }

    function getCampaigns() {}
}
