import { FC, lazy, useEffect } from 'react';
import { useNavigate, useRoutes } from 'react-router-dom';

const Fingers = lazy(() => import('@/views/fingers/Fingers'));
const Monkey = lazy(() => import('@/views/monkey/Monkey'));
const Sentence = lazy(() => import('@/views/sentence/Sentence'));
const Training = lazy(() => import('@/views/training/Training'));
const Test = lazy(() => import('@/views/test/Test'));
const About = lazy(() => import('@/views/about/About'));

const Redirect: FC<{ to: string }> = ({ to }) => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate(to);
    });
    return null;
};

const AppRouter: FC = () => {
    /**
     * react-router-dom@6+ 路由配置方式
     * https://github.com/remix-run/react-router/blob/main/docs/upgrading/v5.md#use-useroutes-instead-of-react-router-config
     */
    const el = useRoutes([
        {
            path: '/',
            element: <Fingers />,
        },
        {
            path: '/monkey',
            element: <Monkey />,
        },
        {
            path: '/sentence',
            element: <Sentence />,
        },
        {
            path: '/training',
            element: <Training />,
        },
        {
            path: '/test',
            element: <Test />,
        },
        {
            path: '/about',
            element: <About />,
        },
        {
            path: '*',
            element: <Redirect to="/" />,
        },
    ]);

    return el;
};

export default AppRouter;
