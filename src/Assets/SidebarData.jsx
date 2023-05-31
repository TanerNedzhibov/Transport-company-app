import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined';
import RequestQuoteOutlinedIcon from '@mui/icons-material/RequestQuoteOutlined';
import CMR from '../Pages/CMR';

export const SidebarData = [
    {
        title: "Превозни средства",
        icon: <LocalShippingIcon/>,
        link: "/Trucks",
        element: ""
    },
    {
        title: "CMR документи",
        icon: <TextSnippetOutlinedIcon/>,
        link: "/CMR",
        element: <CMR />
    }
]