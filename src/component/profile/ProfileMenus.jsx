import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function ProfileMenus() {
  const menuCategories = [
    {
      category: "Profile",
      items: [
        {
          title: "User Info",
          icon: "https://fgfcunion.finance/assets/assets/images/svg/strategy_5257023.svg",
          url: "/editprofile"
        },
        {
          title: "Change Password",
          icon: "https://fgfcunion.finance/assets/assets/images/svg/secured_8572300.svg",
          url: "/changepassword"
        },
        {
          title: "KYC Details",
          icon: "https://fgfcunion.finance/assets/assets/images/svg/business-card_4898232.svg",
          url: "/kyc"
        },
        {
          title: "Add Bank",
          icon: "https://fgfcunion.finance/assets/assets/images/svg/library_15326945.svg",
          url: "/bankdetails"
        }
      ]
    },
    {
      category: "Deposit",
      items: [
        {
          title: "Deposit Fund",
          icon: "https://fgfcunion.finance/assets/assets/images/svg/take_8100424.svg",
          url: "/deposit"
        },
        {
          title: "Deposit History",
          icon: "https://fgfcunion.finance/assets/assets/images/svg/clock_5257266.svg",
          url: "/deposithistory"
        },
        {
          title: "Topup History",
          icon: "https://fgfcunion.finance/assets/assets/images/svg/trophy_8100407.svg",
          url: "/topuphistory"
        }
      ]
    },
    {
      category: "Transfer & Top-up",
      items: [
        {
          title: "Fund Transfer",
          icon: "https://fgfcunion.finance/assets/assets/images/svg/transfer_8678667.svg",
          url: "/transferFund"
        },
        {
          title: "Top-up ID",
          icon: "https://fgfcunion.finance/assets/assets/images/svg/switch-on_17471170.png",
          url: "/topUp"
        }
      ]
    },
    {
      category: "Withdrawal",
      items: [
        {
          title: "Withdrawal Fund",
          icon: "https://fgfcunion.finance/assets/assets/images/svg/briefcase_8100500.svg"
        },
        {
          title: "Withdrawal History",
          icon: "https://fgfcunion.finance/assets/assets/images/svg/alarm_5808360.svg"
        }
      ]
    },
    {
      category: "Bonus Summary",
      items: [
        {
          title: "Monthly Income",
          icon: "https://fgfcunion.finance/assets/assets/images/svg/money_4898354.svg",
          url: "/monthlyincome"
        },
        {
          title: "Level Income",
          icon: "https://fgfcunion.finance/assets/assets/images/svg/bar-chart_4394952.svg",
          url: "/levelincome"
        },
        {
          title: "Compounding Report",
          icon: "https://fgfcunion.finance/assets/assets/images/svg/gift_8100419.svg",
          url: "/CompoundingReport"
        },
        {
          title: "Club Income",
          icon: "https://fgfcunion.finance/assets/assets/images/svg/gift_8100419.svg",
          url: "/clubincome"
        },
        {
          title: "Payout Report",
          icon: "https://fgfcunion.finance/assets/assets/images/svg/gift_8100419.svg",
          url: "/PayoutReport"
        }
      ]
    },
    {
      category: "Referral Program",
      items: [
        {
          title: "Direct Team",
          icon: "https://fgfcunion.finance/assets/assets/images/svg/recruitment_4898334.svg",
          url: "/DirectSummary"
        },
        {
          title: "Downline Team",
          icon: "https://fgfcunion.finance/assets/assets/images/svg/user_4087785.svg",
          url: "/DownlineTeam"
        },
        {
          title: "Help Center",
          icon: "https://fgfcunion.finance/assets/assets/images/svg/help.svg"
        }
      ]
    }
  ];
  return (
    <>
      <div className="relative flex flex-col items-center justify-center overflow-hidden pb-20">
        {/* Blurry Animated Blobs */}
        {/* Profile Section */}
        {menuCategories.map((category, categoryIndex) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: categoryIndex * 0.2 // Delay based on the index of the category
            }}
            key={categoryIndex}
            className="mb-3 relative  w-full"
          >
            <div className="px-5 mb-2">
              <h5 className="text-sm font-semibold">{category.category}</h5>
            </div>
            <div className="mx-3 rounded-3xl p-3 px-0   [background:linear-gradient(45deg,#fff,#fff,#fff)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.50/.48)_40%,_theme(colors.secondary)_86%,_theme(colors.secondary)_20%,_theme(colors.secondary)_94%,_theme(colors.slate.50/.48))_border-box]  border border-transparent  animated-border">
              <div className="">
                <div className="">
                  <ul
                    className={`grid gap-y-5 items-center ${
                      category.items.length > 4
                        ? "grid-cols-4"
                        : category.items.length === 3
                        ? "grid-cols-3"
                        : `grid-cols-${category.items.length}`
                    }`}
                  >
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <Link
                          to={item.url}
                          className="flex flex-col gap-2 items-center text-dark text-center text-xs"
                        >
                          <div className="p-2 hover:scale-110 transition-transform duration-300 ease-in-out [background:linear-gradient(45deg,#fff,#fff,#fff)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.50/.48)_40%,_theme(colors.primary)_86%,_theme(colors.primary)_20%,_theme(colors.primary)_94%,_theme(colors.slate.50/.48))_border-box] rounded-full border border-transparent animated-border">
                            <img
                              src={item.icon}
                              alt={item.title}
                              className="w-8"
                            />
                          </div>
                          <span className="text-xs">{item.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default ProfileMenus;
