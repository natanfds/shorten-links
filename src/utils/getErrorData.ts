import ErrorData from '../types/errorData';

function getErrorData(err: Error): ErrorData {
    let stack: string[];
    let location: string;
    if (typeof err.stack == 'string') {
        stack = err.stack
            .split('\n')
            .map((e: string) => e.trim())
            .filter((e: string) => e.includes('/'))
            .map((e: string) => {
                let path = e.split('/');
                path.shift();
                let rejoinedPath = '/' + path.join('/');
                rejoinedPath = rejoinedPath.replace(')', '');
                rejoinedPath = rejoinedPath.replace(process.cwd(), '');
                return rejoinedPath;
            });

        location = (err.stack.split('\n').filter((e: string) => !e.includes('/'))[1] as string)
            .trim()
            .replace('at ', '');
    } else {
        stack = [];
        location = '';
    }

    const errorData: ErrorData = {
        text: err.message,
        location: location,
        stack: stack,
    };
    return errorData;
}

export default getErrorData;
